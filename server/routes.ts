import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import express from "express";
import path from "path";
import { sendEmail, formatContactEmail } from "./email";
import { sendEmailWithNodemailer } from "./nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // SEO Routes - Serve robots.txt and sitemap.xml with proper headers
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile('robots.txt', { root: './public' });
  });

  app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml');
    res.sendFile('sitemap.xml', { root: './public' });
  });

  // Favicon route
  app.get('/favicon.ico', (req, res) => {
    res.sendFile('favicon.ico', { root: './public' });
  });
  // Serve static files from the public directory
  app.use(express.static(path.resolve(process.cwd(), "public")));
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactSubmissionSchema.parse(req.body);
      
      // Create contact submission
      const submission = await storage.createContactSubmission({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || "",
        service: validatedData.service,
        message: validatedData.message
      });
      
      // Format the email content
      const { text, html } = formatContactEmail(
        validatedData.name,
        validatedData.email,
        validatedData.service,
        validatedData.message,
        validatedData.phone
      );
      
      try {
        // First try with Resend
        try {
          await sendEmail(
            'bezal.john@gmail.com', // Must send to the account owner's email in sandbox mode
            'New Contact Form Submission - Mavericks Edge Website',
            text,
            html
          );
          
          console.log('Email sent with Resend to bezal.john@gmail.com');
        } catch (error: any) {
          console.log('Resend failed, trying Nodemailer instead:', error?.message || 'Unknown error');
          
          // Fallback to Nodemailer if Resend fails
          const result = await sendEmailWithNodemailer(
            'info@mavericksedge.ca', // This will create a test message viewable at preview URL
            'New Contact Form Submission - Mavericks Edge Website',
            text,
            html
          );
          
          // If successful, log the preview URL
          if (result.previewURL) {
            console.log('Nodemailer test email sent! View it here:', result.previewURL);
            console.log('IMPORTANT: This is a test email with a preview link. In production, emails should be sent directly to info@mavericksedge.ca');
          }
        }
      } catch (emailError) {
        // Log the error but don't fail the request
        console.error('Failed to send email notification with all methods:', emailError);
        // We'll still return success to the user as their submission was saved
      }
      
      res.status(201).json({ success: true, message: "Thank you for your message! We will get back to you soon." });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error saving contact submission:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request. Please try again later." 
      });
    }
  });

  // 404 Error Handler for API routes only - Let Vite handle SPA routing in development
  app.use('/api/*', (req, res) => {
    res.status(404).json({ 
      success: false, 
      message: 'API endpoint not found',
      status: 404 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}

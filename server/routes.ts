import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from the public directory
  app.use(express.static(path.resolve(process.cwd(), "public")));
  
  // Route to check if the video file exists and is accessible
  app.get("/api/check-video", (req, res) => {
    const videoPath = path.resolve(process.cwd(), "public/videos/background.mp4");
    import('fs').then(fs => {
      const exists = fs.existsSync(videoPath);
      res.json({ 
        exists,
        path: videoPath,
        url: "/videos/background.mp4"
      });
    }).catch(err => {
      res.status(500).json({ error: err.message });
    });
  });
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactSubmissionSchema.parse(req.body);
      
      // Create contact submission
      const submission = await storage.createContactSubmission({
        name: validatedData.name,
        email: validatedData.email,
        service: validatedData.service,
        message: validatedData.message,
        contactEmail: "info@mavericksedge.ca" // Set the contact email
      });
      
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

  const httpServer = createServer(app);

  return httpServer;
}

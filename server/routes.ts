import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
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
        message: validatedData.message
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

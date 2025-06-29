import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { soapRequestSchema, restRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // SOAP API endpoint for testing
  app.post("/api/soap/test", async (req, res) => {
    try {
      const validatedRequest = soapRequestSchema.parse(req.body);
      
      // Mock SOAP response for demonstration
      const soapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetUserInfoResponse>
      <UserId>12345</UserId>
      <Name>John Doe</Name>
      <Email>john.doe@example.com</Email>
      <Role>Developer</Role>
      <Status>Active</Status>
      <CreatedAt>2024-01-15T10:30:00Z</CreatedAt>
      <LastLogin>2024-01-20T14:25:00Z</LastLogin>
    </GetUserInfoResponse>
  </soap:Body>
</soap:Envelope>`;

      res.set({
        'Content-Type': 'text/xml; charset=utf-8',
        'SOAPAction': validatedRequest.soapAction
      });
      
      res.status(200).send(soapResponse);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid SOAP request", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // REST API endpoint for testing
  app.post("/api/rest/test", async (req, res) => {
    try {
      const validatedRequest = restRequestSchema.parse(req.body);
      
      // Mock REST response for demonstration
      const restResponse = {
        id: "12345",
        name: "John Doe",
        email: "john.doe@example.com",
        role: "developer",
        status: "active",
        created_at: "2024-01-15T10:30:00Z",
        last_login: "2024-01-20T14:25:00Z"
      };

      res.status(200).json(restResponse);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid REST request", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Sample SOAP endpoint that can be tested
  app.post("/api/soap/users/:id", async (req, res) => {
    const { id } = req.params;
    
    // Parse SOAP envelope (simplified)
    const soapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetUserInfoResponse>
      <UserId>${id}</UserId>
      <Name>Sample User</Name>
      <Email>user${id}@example.com</Email>
      <Role>User</Role>
      <Status>Active</Status>
    </GetUserInfoResponse>
  </soap:Body>
</soap:Envelope>`;

    res.set('Content-Type', 'text/xml; charset=utf-8');
    res.status(200).send(soapResponse);
  });

  // Sample REST endpoint that can be tested
  app.get("/api/rest/users/:id", async (req, res) => {
    const { id } = req.params;
    
    const restResponse = {
      id: id,
      name: "Sample User",
      email: `user${id}@example.com`,
      role: "user",
      status: "active",
      created_at: new Date().toISOString(),
      last_login: new Date().toISOString()
    };

    res.status(200).json(restResponse);
  });

  const httpServer = createServer(app);
  return httpServer;
}

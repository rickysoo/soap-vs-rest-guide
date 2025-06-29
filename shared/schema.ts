import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// API Request schemas for testing
export const soapRequestSchema = z.object({
  endpoint: z.string().url(),
  soapAction: z.string(),
  envelope: z.string(),
});

export const restRequestSchema = z.object({
  method: z.enum(['GET', 'POST', 'PUT', 'DELETE']),
  endpoint: z.string().url(),
  headers: z.string().optional(),
  body: z.string().optional(),
});

export const apiResponseSchema = z.object({
  status: z.number(),
  data: z.string(),
  headers: z.record(z.string()).optional(),
  timestamp: z.string(),
});

export type SOAPRequest = z.infer<typeof soapRequestSchema>;
export type RESTRequest = z.infer<typeof restRequestSchema>;
export type APIResponse = z.infer<typeof apiResponseSchema>;

// Keep existing user schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// lib/zod/userSchemas.ts
import { z } from 'zod';

// Shared schema for fields used in both registration and login
const emailPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Registration schema with additional `name` field
export const registrationSchema = emailPasswordSchema.extend({
  name: z.string().min(1, "Name is required"),
});

// Login schema using only email and password fields
export const loginSchema = emailPasswordSchema;

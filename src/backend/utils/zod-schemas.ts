import { z } from "zod";

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  role: z.enum(["admin", "provider", "student"]),
});

const loginSchema = z.object({
  email: z.string().email(),
});

export { loginSchema, registerSchema };

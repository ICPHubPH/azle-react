import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string({ message: "Email is required" }).email({ message: "Invalid email address" }).max(255, { message: "Email too long" }),
  password: z.string({ message: "Password is required" }).min(6, { message: "Password must be at least 6 characters" }).max(255, { message: "Password too long" }),
  remember: z.boolean().optional()
})

export type FormSchema = typeof loginFormSchema;
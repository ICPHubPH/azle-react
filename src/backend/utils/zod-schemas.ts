import { z } from "zod";

const changePasswordSchema = z.object({
  oldPassword: z.string().min(8, "Old password must be at least 8 characters long"),
  newPassword: z.string()
    .min(8, "New password must be at least 8 characters long")
    .regex(/[A-Z]/, "New password must contain at least one uppercase letter")
    .regex(/[a-z]/, "New password must contain at least one lowercase letter")
    .regex(/\d/, "New password must contain at least one number")
    .regex(/[@$!%*?&]/, "New password must contain at least one special character"),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "New password and confirmation do not match",
  path: ["confirmPassword"], // set the error path to `confirmPassword`
});

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8).max(30),
  role: z.enum(["admin", "provider", "student"]),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(30),
});

export {
  changePasswordSchema, loginSchema, registerSchema
};

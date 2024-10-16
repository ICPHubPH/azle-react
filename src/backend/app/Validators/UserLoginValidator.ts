import { z } from "zod";

export default class UserLoginValidator {
  static schema = z.object({
    email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email address" }).max(255, { message: "Email too long" }).optional(),
    password: z.string({ required_error: "Password is required" }).min(6, { message: "Password must be at least 6 characters" }).max(255, { message: "Password too long" }).optional(),
    principal: z.string().max(128, { message: "Principal too long" }).optional(),
  }).refine((data) => {
    const hasEmailAndPassword = data.email && data.password;
    const hasPrincipal = data.principal;

    return (hasEmailAndPassword && !hasPrincipal) || (!hasEmailAndPassword && hasPrincipal) || (hasEmailAndPassword && hasPrincipal);
  }, {
    message: "Either provide email/password or log in with Internet Identity.",
    path: ["email"],
  });

  static validate = this.schema.safeParse;
}
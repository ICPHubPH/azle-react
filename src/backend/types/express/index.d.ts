import { Express } from "express";

declare global {
  namespace Express {
    interface Request {
      /**
       * Authorized user ID.
       */
      user?: string;
    }
  }
}
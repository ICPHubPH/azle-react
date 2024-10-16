import { Express } from "express";

declare global {
  namespace Express {
    interface Request {
      /**
       * Authorized user ID.
       */
      user?: string;
      /**
       * Current page.
       */
      page?: number;
      /**
       * Pagination item count.
       */
      limit?: number;
      /**
       * Pagination skipped item counts.
       */
      skip?: number;
    }
  }
}
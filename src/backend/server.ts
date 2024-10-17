// import cors from 'cors';
import express from "express";

import ExceptionHandler from "./app/Exceptions/Handler";
import { routes } from "./start/routes";
import cors from "cors";
import dotenv from "dotenv";
import { getCanisterLink } from "Helpers/helpers";

export function CreateServer() {
  dotenv.config();

  const result = dotenv.config();
  if (result.error) {
    console.error("Error loading .env file:", result.error);
  } else {
    console.log("Environment variables loaded successfully!");
    getCanisterLink()
  }

  const app = express();
  app.use(express.json({ limit: "1.5mb" }));
  app.use(cors());
  app.use(ExceptionHandler);
  app.use("/icp", routes);
  app.use(express.static("/dist"));
  return app.listen();
}

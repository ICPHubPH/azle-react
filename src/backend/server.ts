// import cors from 'cors';
import express from "express";

import ExceptionHandler from "./app/Exceptions/Handler";
import { routes } from "./start/routes";
import cors from "cors";

export function CreateServer() {
  const app = express();
  app.use(express.json({ limit: "1.5mb" }));
  app.use(cors());
  app.use(ExceptionHandler);
  app.use("/icp", routes);
  app.use(express.static("/dist"));
  return app.listen();
}

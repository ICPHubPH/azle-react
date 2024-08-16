// import cors from 'cors';
import express from 'express';

import ExceptionHandler from './app/Exceptions/Handler';
import { routes } from './start/routes';

export function CreateServer() {
  const app = express();
  app.use(express.json({ limit: '1.5mb' }));
  app.use(ExceptionHandler);
  app.use(routes);
  app.use(express.static('/dist'));
  return app.listen();
}

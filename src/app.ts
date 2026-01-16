import express, { type Application } from 'express';
import cors from 'cors';
import pino from 'pino';
import { pinoHttp } from 'pino-http';
import menuRoutes from './routes/menu';

// Deklarasi Express
const app: Application = express();

// Konfigurasi pino logger
export const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    },
  },
});

// Middleware untuk membaca data json
app.use(express.json());

// Middleware untuk membaca form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Middleware untuk CORS
app.use(cors());

// Integrasi HTTP dengan logger
app.use(
  pinoHttp({
    logger,
  })
);

// Dummpy API
app.use('/api', menuRoutes);

export default app;

import express, { type Application } from 'express';
import cors from 'cors';
import pino, { type LoggerOptions } from 'pino';
import { pinoHttp } from 'pino-http';
import menuRoutes from './routes/menu';
import { routes } from './routes';

// Deklarasi Express
const app: Application = express();

// Pino Dinamis
const pinoOptions: LoggerOptions = {
  level: 'info',
};

// Tambahkan transport hanya di development
if (process.env.NODE_ENV !== 'production') {
  pinoOptions.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    },
  };
}

export const logger = pino(pinoOptions);

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
routes(app);

export default app;

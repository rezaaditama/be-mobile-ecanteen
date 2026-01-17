import { env } from './config/env';
import app, { logger } from './app';

// Port berasal dari env
const PORT = Number(env.PORT);

// Jalankan ketika di local seperti ini
if (process.env.NODE_ENV !== 'production') {
  const PORT = Number(env.PORT) || 3000;
  app.listen(PORT, () => {
    logger.info(`Server running in ${env.NODE_ENV} http://localhost:${PORT}`);
  });
}

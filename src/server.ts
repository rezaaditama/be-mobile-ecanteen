import { env } from '@/config/env';
import app, { logger } from './app';

// Port berasal dari env
const PORT = Number(env.PORT);

// Jalankan ketika server dimulai
app.listen(PORT, () => {
  logger.info(`Server running in ${env.NODE_ENV} http://localhost:${PORT}`);
});

import { env } from '@/config/env';
import app, { logger } from './app';

// Jalankan listener HANYA jika di local (development)
if (process.env.NODE_ENV !== 'production') {
  // Ambil PORT hanya di sini agar tidak error di serverless Vercel
  const PORT = Number(env.PORT) || 3000;

  app.listen(PORT, () => {
    logger.info(`Server running in ${env.NODE_ENV} http://localhost:${PORT}`);
  });
}

// WAJIB: Export app untuk Vercel
export default app;

import z from 'zod';

// Schema env
const envSchema = z.object({
  PORT: z.string().default('3000'),
  NODE_ENV: z
    .enum(['developer', 'production', 'testing'])
    .default('production'),
});

// Mengambil variabel lingkungan (Environment)
const _env = envSchema.safeParse(process.env);

//   Mengubah agar error lebih mudah di baca
if (!_env.success) {
  console.error('Invalid environment variables');
  // const formatError = z.treeifyError(_env.error);
  // console.error('Invalid Environment:', JSON.stringify(formatError, null, 2));
  // process.exit(1);
}
export const env = _env.success
  ? _env.data
  : { PORT: '3000', NODE_ENV: 'production' };

import z from 'zod';

export const LoginSchema = z.object({
  email: z.string().min(1, 'username minimal 3 karakter'),
  password: z.string().min(2, 'Password minimal 6 karakter'),
});

// Tipe data untuk auth
export type LoginInput = z.infer<typeof LoginSchema>;

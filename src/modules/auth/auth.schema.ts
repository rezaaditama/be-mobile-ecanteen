import z from 'zod';

// Input user login
export const LoginSchema = z.object({
  email: z.string().email('Format email tidak valid'),
  password: z.string().min(8, 'Password minimal 8 karakter'),
});

// Input user register
export const RegisterSchema = z.object({
  email: z.string().email('Format email tidak valid'),
  password: z.string().min(8, 'Password minimal 8 karakter'),
  fullname: z.string().min(1, 'Mohon isi nama panjang'),
  user_phone: z.string().min(10, 'Nomor telepon tidak valid'),
  user_role: z.enum(['penjual', 'user']).optional(),
});

// Tipe data untuk auth
export type LoginInput = z.infer<typeof LoginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;

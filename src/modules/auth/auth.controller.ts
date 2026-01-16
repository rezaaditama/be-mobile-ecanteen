import { LoginSchema, RegisterSchema } from './auth.schema';
import type { Request, Response } from 'express';

export const loginHandler = async (req: Request, res: Response) => {
  try {
    // Mengambil input
    const validateData = LoginSchema.parse(req.body);

    // Data dummy
    const dummyUser = {
      user_id: 1,
      email: 'aditamareza03@gmail.com',
      password: '123456789',
      fullname: 'Reza Aditama',
      user_role: 'user',
      user_phone: '083819553519',
    };

    // Validasi email dan password
    if (
      validateData.email !== dummyUser.email ||
      validateData.password !== dummyUser.password
    ) {
      return res.status(401).json({ message: 'email atau password salah!' });
    }

    // Mengembalikan response
    return res.json({
      message: 'Login Berhasil',
      data: {
        user_id: dummyUser.user_id,
        email: dummyUser.email,
        fullname: dummyUser.fullname,
        user_role: dummyUser.user_role,
        user_phone: dummyUser.user_phone,
      },
    });
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: error.errors?.[0]?.message || 'Data tidak valid' });
  }
};

// Dummy Id
let lastId = 1;

export const registerHandler = async (req: Request, res: Response) => {
  try {
    const validateData = RegisterSchema.parse(req.body);

    // Gabungkan Data User Baru
    const newUser = {
      user_id: lastId++,
      email: validateData.email,
      password: validateData.password,
      fullname: validateData.fullname,
      user_phone: validateData.user_phone,
      user_role: 'user',
      create_at: new Date().toISOString(),
    };

    // Return Data
    return res.status(201).json({
      message: 'Register Berhasil',
      data: newUser,
    });
  } catch (error: any) {
    // Kalau gagal
    return res.status(400).json({
      message: error.errors?.[0].message || 'Data tidak valid',
    });
  }
};

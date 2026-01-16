import { LoginSchema } from './auth.schema';
import type { Request, Response } from 'express';

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const validateData = LoginSchema.parse(req.body);

    const dummyUser = {
      id: 1,
      email: 'user',
      password: '123',
      fullname: 'Reza Aditama',
      user_role: 'user',
      user_phone: '083819553519',
    };

    if (
      validateData.email !== dummyUser.email ||
      validateData.password !== dummyUser.password
    ) {
      return res.status(401).json({ message: 'email atau password salah!' });
    }

    return res.json({
      message: 'Login Berhasil',
      data: {
        id: dummyUser.id,
        email: dummyUser.email,
        password: dummyUser.password,
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

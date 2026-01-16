import { Router } from 'express';
import { loginHandler, registerHandler } from './auth.controller';

export const authRoutes: Router = Router();
authRoutes.post('/login', loginHandler); //Handler login
authRoutes.post('/register', registerHandler); //Handler register

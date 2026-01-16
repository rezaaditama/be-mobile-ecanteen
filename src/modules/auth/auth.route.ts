import { Router } from 'express';
import { loginHandler } from './auth.controller';

export const authRoutes: Router = Router();
authRoutes.post('/login', loginHandler);

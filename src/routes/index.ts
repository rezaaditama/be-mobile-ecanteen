import { Router, type Application } from 'express';
import { authRoutes } from '../modules/auth/auth.route';

const _routes: Array<[string, Router]> = [['/auth', authRoutes]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(`/api${url}`, router);
  });
};

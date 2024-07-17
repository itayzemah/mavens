import express from 'express';
import { createGameRouter } from '../game';
import { Services } from '../server';
import { createUserRouter } from '../user';

export function createMainRouter(services: Services) {
  const router = express.Router();

  router.use('/user', createUserRouter(services.userService));
  router.use('/game', createGameRouter(services.gameService));

  return router;
}

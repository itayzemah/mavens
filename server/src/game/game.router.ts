import express from 'express';
import { GameService } from '.';

export function createGameRouter(gameService: GameService) {
  const router = express.Router();

  router.put('/', async (req, res, next) => {
    try {
      const { score } = req.body;
      const userId = req.cookies['user-id'];
      await gameService.setRecord(userId, score);
      return res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  });

  router.get('/leader-board', async (req, res, next) => {
    try {
      return res.json(await gameService.getLeaderBoard());
    } catch (e) {
      next(e);
    }
  });

  return router;
}

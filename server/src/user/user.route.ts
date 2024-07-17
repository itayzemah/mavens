import express from 'express';
import { UserService } from '.';

export function createUserRouter(userService: UserService) {
  const router = express.Router();

  router.post('/', async (req, res, next) => {
    try {
      const { username } = req.body;
      const createdUser = await userService.create({ username });
      res.cookie('user-id', createdUser.id, {
        httpOnly: true,
        secure: false,
        maxAge: 3600000,
      });
      return res.send(createdUser);
    } catch (e) {
      next(e);
    }
  });

  return router;
}

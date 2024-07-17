import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import { errorHandler } from '../middleware';
import { GameService } from './game';
import { GameDao } from './game/game.dao';
import { GenderApiAdapter, UserApiAdapter } from './ioAdapter';
import { createMainRouter } from './routes';
import { PrismaUserDao } from './user/user.dao';
import { UserService } from './user/user.service';
import cookieParser from 'cookie-parser';

config({ path: '.env' });
const services = buildServices();
const app = express();
app.use(cors({ credentials: true, origin: ['http://localhost:5173', 'http://localhost'] }));

app.use(cookieParser());
app.use(express.json());
app.use('/api', createMainRouter(services));
app.use(errorHandler);

app.get('/', (_req, res) => {
  res.sendStatus(200);
});
app.all('*', (_req, res) => {
  res.sendStatus(404);
});

app.listen(process.env.SERVER_PORT || 8080, () => console.log(`Server started on port ${process.env.SERVER_PORT}`));

function buildDaos() {
  return {
    userDao: new PrismaUserDao(),
    gameDao: new GameDao(),
  };
}
function buildIoAdapters() {
  return {
    userApiAdapter: new UserApiAdapter(),
    genderApiAdapter: new GenderApiAdapter(),
  };
}

function buildServices() {
  const daos = buildDaos();
  const ioAdapters = buildIoAdapters();
  return {
    userService: new UserService(daos.userDao, ioAdapters.genderApiAdapter, ioAdapters.userApiAdapter),
    gameService: new GameService(daos.gameDao),
  };
}

export type Daos = ReturnType<typeof buildDaos>;
export type Services = ReturnType<typeof buildServices>;
export type IOAdapters = ReturnType<typeof buildIoAdapters>;

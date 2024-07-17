export { GameDao } from './game.dao';
export { createGameRouter } from './game.router';
export { GameService } from './game.service';

export type GameResult = {
  userId: string;
  successfulSteps: number;
};

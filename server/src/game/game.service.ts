import { GameDao, GameResult } from '.';

export class GameService {
  constructor(private gameDao: GameDao) {}

  async setRecord(userId: any, steps: any): Promise<void> {
    return await this.gameDao.create(userId, steps);
  }

  async getLeaderBoard(): Promise<GameResult[]> {
    return await this.gameDao.getLeaderBoard();
  }
}

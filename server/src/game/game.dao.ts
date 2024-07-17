import { prisma } from '../prismaClient';

export class GameDao {
  async create(userId: any, steps: any): Promise<void> {
    await prisma.leaderboard.create({ data: { successfulSteps: steps, userId } });
  }
  getLeaderBoard() {
    return prisma.leaderboard.findMany({
      include: { user: { select: { username: true } } },
      orderBy: [{ successfulSteps: 'desc' }],
    });
  }
}

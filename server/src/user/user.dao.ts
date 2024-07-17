import { User } from '@prisma/client';
import { UserDao } from '.';
import { prisma } from '../prismaClient';

export class PrismaUserDao implements UserDao {
  async update(id: string, user: Partial<User>): Promise<void> {
    await prisma.user.update({ data: user, where: { id } });
  }
  async create(user: User) {
    return await prisma.user.create({ data: user });
  }
}

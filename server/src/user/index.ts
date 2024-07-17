import { User } from '@prisma/client';

export interface UserDao {
  update(id: string, user: Partial<User>): Promise<void>;
  create(user: User): Promise<User>;
}

export type CreateUserRequest = { username: string };

export { createUserRouter } from './user.route';
export { UserService } from './user.service';

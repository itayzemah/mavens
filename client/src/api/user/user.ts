import type { CreateUserInput } from '.';
import { clientApi } from '..';

export async function createUser(data: CreateUserInput) {
  return await clientApi.post('/api/user', data);
}

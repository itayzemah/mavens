import { clientApi } from '..';

export async function recordScore(data: { score: number }) {
  return await clientApi.put('/api/game', data);
}

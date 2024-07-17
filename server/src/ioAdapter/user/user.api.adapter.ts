import { Gender } from '@prisma/client';
import { BaseApiAdapter, UserData } from '..';

export class UserApiAdapter extends BaseApiAdapter {
  constructor() {
    super('https://randomuser.me/api/');
  }

  async getUserData(gender: Gender) {
    return await this.axiosInstance.get<{ results: UserData[] }>('/', { params: { gender } });
  }
}

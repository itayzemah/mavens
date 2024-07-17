import { GenderDetails } from '.';
import { BaseApiAdapter } from '..';

export class GenderApiAdapter extends BaseApiAdapter {
  constructor() {
    super('https://api.genderize.io');
  }

  async getUserGender(name: string) {
    return await this.axiosInstance.get<GenderDetails>(`/?name=${name}`);
  }
}

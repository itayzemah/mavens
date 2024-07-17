import { Gender } from '@prisma/client';
import { randomUUID } from 'crypto';
import { CreateUserRequest, UserDao } from '.';
import { GenderApiAdapter, UserApiAdapter } from '../ioAdapter';

export class UserService {
  constructor(
    private userDao: UserDao,
    private genderApiAdapter: GenderApiAdapter,
    private userApiAdapter: UserApiAdapter
  ) {}

  async create({ username }: CreateUserRequest) {
    const createdAt = new Date();
    const createdUser = await this.userDao.create({
      username,
      createdAt,
      updatedAt: createdAt,
      id: randomUUID(),
      gender: Gender.undetermined,
      cellphone: null,
      dateOfBirth: null,
      email: null,
      phone: null,
    });

    const genderResponse = await this.genderApiAdapter.getUserGender(username);
    if (genderResponse.data.probability > 0.95) {
      const gender: Gender = this.toGender(genderResponse.data.gender);
      const userData = await this.userApiAdapter.getUserData(gender);
      const { email, dob, phone, cell } = userData.data.results[0];
      const dateOfBirth = new Date(dob.date);
      await this.userDao.update(createdUser.id, { gender, email, cellphone: cell, dateOfBirth, phone });
    }
    return createdUser;
  }

  private toGender(gender: string): Gender {
    switch (gender.toLowerCase()) {
      case 'male':
        return Gender.male;
      case 'female':
        return Gender.female;
      default:
        return Gender.undetermined;
    }
  }
}

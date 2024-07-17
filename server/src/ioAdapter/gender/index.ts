export { GenderApiAdapter } from './gender.api.adapter';

export type GenderDetails = {
  count: number;
  name: string;
  gender: 'male' | 'female';
  probability: number;
};

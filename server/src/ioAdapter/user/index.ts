export { UserApiAdapter } from './user.api.adapter';
export type UserData = {
  location: Location;
  email: string;
  dob: Dob;
  phone: string;
  cell: string;
  nat: string;
};

export type Location = {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
};

export type Street = {
  number: number;
  name: string;
};

export type Dob = {
  date: string;
  age: number;
};

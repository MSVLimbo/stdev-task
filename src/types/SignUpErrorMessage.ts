import { ICreateUserDto } from './iCreateUserDto';

export type SignUpErrorMessage = {
  [K in keyof ICreateUserDto]?: string[];
};

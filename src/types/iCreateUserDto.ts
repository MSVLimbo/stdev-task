export interface ICreateUserDto {
  'first-name': string;
  'last-name': string;
  email: string;
  password: string;
  image: FormData;
}

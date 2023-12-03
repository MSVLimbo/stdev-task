export interface ILoginUserDto {
  email: { value: string; errors: string[] };
  password: { value: string; errors: string[] };
  rememberMe?: { value: boolean; errors: string[] };
}

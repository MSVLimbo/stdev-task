import { emailRegex } from '../../molecules/SignUpPopupContent/util';

export function validateSignIn(value: string, name: string) {
  if (name === 'email' && !emailRegex.test(value)) {
    return ['sign-in.email-filed.error.incorrect-email'];
  }
  if (name === 'password' && value.length < 4) {
    return ['sign-in.password-filed.error.weak-password'];
  }
  return false;
}

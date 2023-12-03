import { BaseSyntheticEvent } from 'react';
import { ILoginUserDto } from '../../../types/iLoginUserDto';

export type SignInPopupProps = {
  onChange: (event: BaseSyntheticEvent) => void;
  onRememberMe: (data: boolean) => void;
  userData: ILoginUserDto;
  error?: string;
  validateData: (name: string) => void;
  handleSize: (height: number, sizes: any) => string;
};

import {IUserDto} from "../../../types/iUserDto.ts";

export enum ProfileButtonSizeTypes {
  XXLarge = 'xxlarge',
  XLarge = 'xlarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  XSmall = 'xsmall',
}

export interface IProfileButtonSizes {
  size: number;
  fontSize: number;
}

interface IProfileButton {
  size?: ProfileButtonSizeTypes;
  title: string;
  tabIndex?: number;
  ariaLabel?: string;
  onClick: () => void;
  profileInfo?: IUserDto;
}

export default IProfileButton;

import { KeyboardEventHandler, ReactNode } from 'react';

export interface IButtonSizes {
  minWidth: number;
  height: number;
  borderWidth?: number;
  borderRadius: number;
  padding?: Array<number>;
  fontSize?: number;
  lineHeight?: number;
  iconSize?: number;
  iconSpacing?: number;
}
export enum ButtonSizeTypes {
  XXLarge = 'xxlarge',
  XLarge = 'xlarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  XSmall = 'xsmall',
}
// #########################################################
export enum ButtonImportanceTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}
// #########################################################
export enum ButtonStyleTypes {
  High = 'high',
  Normal = 'normal',
  Low = 'low',
  Ghost = 'ghost',
  LowGhost = 'lowGhost',
}
// #########################################################
export enum ButtonFileAcceptTypes {
  APNG = 'image/apng',
  BMP = 'image/bmp',
  GIF = 'image/gif',
  JPEG = 'image/jpeg',
  PJPEG = 'image/pjpeg',
  PNG = 'image/png',
  SVG_XML = 'image/svg+xml',
  TIFF = 'image/tiff',
  WEBP = 'image/webp',
  XICON = 'image/x-icon',
}
// #########################################################
interface IBaseButton {
  children?: ReactNode;
  size?: ButtonSizeTypes;
  sizes?: Record<string, Record<string, string | number | Array<number>>>;
  importance?: ButtonImportanceTypes;
  style?: ButtonStyleTypes;
  centerIcon?: string;
  imgLogo?: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  title?: string;
  tabIndex?: number;
  ariaLabel?: string;
  id?: string;
  className?: string;
  debounceInterval?: number;
  onKeyPress?: KeyboardEventHandler | undefined;
}

export interface IButton extends IBaseButton {
  isActive?: boolean;
  onClick: () => void;
}

export interface IButtonLink extends IBaseButton {
  href: string;
  target?: string;
  rel?: string;
  download?: boolean;
  onClick?: () => void;
}

export interface IButtonUpload extends IBaseButton {
  accept?: ButtonFileAcceptTypes;
  multiple?: boolean;
  onClick?: () => void;
  onChange: () => void;
}
// #########################################################
export interface IButtonInner {
  children?: ReactNode;
  styles: any;
  leftIcon?: string;
  centerIcon?: string;
  rightIcon?: string;
  imgLogo?: string;
}

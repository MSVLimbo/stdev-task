import { BaseSyntheticEvent, ChangeEvent } from 'react';
import { StylesConfig } from '../../../config';

interface IInputSizes {
  height: number;
  defaultPadding: number;
  borderRadius: number;
  borderWidth: number;
  fontSize: number;
  iconSize: number;
  iconPadding?: number;
  iconPosition: number;
}

export enum InputSizeTypes {
  XXLarge = 'xxlarge',
  XLarge = 'xlarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  XSmall = 'xsmall',
  Search = 'search',
}

const InputSizes: Record<string, IInputSizes> = {
  [InputSizeTypes.Search]: {
    height: 52,
    defaultPadding: 14,
    borderRadius: StylesConfig.borderRadiuses.radius4,
    borderWidth: 1,
    fontSize: 18,
    iconSize: 24,
    iconPadding: 34,
    iconPosition: 14,
  },
  [InputSizeTypes.XXLarge]: {
    height: 52,
    defaultPadding: 14,
    borderRadius: StylesConfig.borderRadiuses.radius4,
    borderWidth: 1,
    fontSize: 18,
    iconSize: 24,
    iconPadding: 46,
    iconPosition: 14,
  },
  [InputSizeTypes.XLarge]: {
    height: 48,
    defaultPadding: 12,
    borderRadius: StylesConfig.borderRadiuses.radius4,
    borderWidth: 1,
    fontSize: 16,
    iconSize: 22,
    iconPadding: 43,
    iconPosition: 9,
  },
  [InputSizeTypes.Large]: {
    height: 40,
    defaultPadding: 10,
    borderRadius: StylesConfig.borderRadiuses.radius4,
    borderWidth: 1,
    fontSize: 16,
    iconSize: 20,
    iconPadding: 36,
    iconPosition: 10,
  },
  [InputSizeTypes.Medium]: {
    height: 36,
    defaultPadding: 8,
    borderRadius: StylesConfig.borderRadiuses.radius4,
    borderWidth: 1,
    fontSize: 14,
    iconSize: 18,
    iconPadding: 33,
    iconPosition: 9,
  },
  [InputSizeTypes.Small]: {
    height: 30,
    defaultPadding: 6,
    borderRadius: StylesConfig.borderRadiuses.radius4,
    borderWidth: 1,
    fontSize: 12,
    iconSize: 16,
    iconPadding: 27,
    iconPosition: 7,
  },
  [InputSizeTypes.XSmall]: {
    height: 24,
    defaultPadding: 4,
    borderRadius: StylesConfig.borderRadiuses.radius3,
    borderWidth: 1,
    fontSize: 10,
    iconSize: 14,
    iconPadding: 23,
    iconPosition: 5,
  },
};

export enum InputStyleTypes {
  Disabled = 'disabled',
  Default = 'default',
  Hover = 'hover',
  FilledFocus = 'filled-focus',
  FilledHover = 'filled-hover',
  Selectable = 'selectable',
  NonUsable = 'non-usable',
}

export interface IInputStyles {
  borderColor: string;
  typeIconColor: string;
  actionIconColor: string;
  placeHolderColor: string;
  textColor?: string;
}

export enum InputValueTypes {
  Text = 'text',
  Number = 'number',
  Email = 'email',
  Password = 'password',
  Date = 'date',
  Telephone = 'tel',
}

export interface InputProps {
  type: InputValueTypes;
  size?: InputSizeTypes | any;
  autocomplete?: string;
  id?: string;
  typeIcon?: string;
  countryCode?: string;
  actionIcon?: string;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  tabIndex?: number;
  ariaLabel?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: BaseSyntheticEvent) => void;
  onAction?: () => void;
  handleClick?: () => void;
  name?: string;
  required?: boolean;
  selectableInput?: boolean;
  isSelectActive?: boolean;
  nonUsableInput?: boolean;
  focus?: boolean;
  className?: string;
}

export { InputSizes };

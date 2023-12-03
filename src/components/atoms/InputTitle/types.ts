interface IInputTitleSizes {
  fontSize: number;
  lineHeight: string;
}

export enum InputTitleSizeTypes {
  XXLarge = 'xxlarge',
  XLarge = 'xlarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  XSmall = 'xsmall',
}

const InputSizes: Record<string, IInputTitleSizes> = {
  [InputTitleSizeTypes.XXLarge]: {
    fontSize: 16,
    lineHeight: '22px',
  },
  [InputTitleSizeTypes.XLarge]: {
    fontSize: 16,
    lineHeight: '22px',
  },
  [InputTitleSizeTypes.Large]: {
    fontSize: 14,
    lineHeight: '18px',
  },
  [InputTitleSizeTypes.Medium]: {
    fontSize: 14,
    lineHeight: '18px',
  },
  [InputTitleSizeTypes.Small]: {
    fontSize: 12,
    lineHeight: '16px',
  },
  [InputTitleSizeTypes.XSmall]: {
    fontSize: 12,
    lineHeight: '16px',
  },
};

export enum InputTitleStyleTypes {
  Disabled = 'disabled',
  Default = 'default',
}

interface IInputTitle {
  title: string;
  isRequired?: boolean;
  size?: InputTitleSizeTypes | any;
  style?: InputTitleStyleTypes | any;
  className?: string;
  infoMessage?: string;
}

export { InputSizes };
export default IInputTitle;

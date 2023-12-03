export enum ProfileAvatarSizeTypes {
  XXLarge = 'xxlarge',
  XLarge = 'xlarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  XSmall = 'xsmall',
}

export interface IProfileAvatarSize {
  size: number;
  fontSize: number;
}

interface IProfileAvatar {
  size?: ProfileAvatarSizeTypes;
  avatarSrc?: string;
  title: string;
  tabIndex?: number;
  ariaLabel?: string;
  onClick: () => void;
}

export default IProfileAvatar;

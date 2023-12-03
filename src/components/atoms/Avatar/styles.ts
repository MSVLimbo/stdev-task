import { createUseStyles } from 'react-jss';

import { StylesConfig } from 'config';
import Transitions from 'styles/utils/transitions';
import { FontWeights } from 'styles/utils/fonts';

import { IProfileAvatarSize, ProfileAvatarSizeTypes } from './types';

const profileAvatarSize: Record<string, IProfileAvatarSize> = {
  [ProfileAvatarSizeTypes.XXLarge]: {
    size: 52,
    fontSize: 52,
  },
  [ProfileAvatarSizeTypes.XLarge]: {
    size: 48,
    fontSize: 48,
  },
  [ProfileAvatarSizeTypes.Large]: {
    size: 40,
    fontSize: 40,
  },
  [ProfileAvatarSizeTypes.Medium]: {
    size: 36,
    fontSize: 18,
  },
  [ProfileAvatarSizeTypes.Small]: {
    size: 30,
    fontSize: 30,
  },
  [ProfileAvatarSizeTypes.XSmall]: {
    size: 30,
    fontSize: 48,
  },
};

const useStyles = createUseStyles(
  {
    root: {
      // position: 'relative',
    },
    button: {
      display: 'block',
      width: ({ sizes }: any) => sizes.size,
      height: ({ sizes }: any) => sizes.size,
      border: 'none',
      borderRadius: '50%',
      outline: 'none',
      backgroundColor: StylesConfig.secondary.alpha2,
      fontWeight: FontWeights.SemiBold,
      fontSize: ({ fontSize }: any) => fontSize,
      color: StylesConfig.texts.base,
      lineHeight: 1,
      textTransform: 'uppercase',
      position: 'relative',
      overflow: 'hidden',
      '&:after': {
        content: '""',
        display: 'block',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        border: `2px solid ${StylesConfig.primary.base}`,
        borderRadius: 'inherit',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0,
        transitionProperty: 'box-shadow, opacity',
        transitionDuration: Transitions.Default,
        transitionTimingFunction: 'ease',
      },
    },
    imageHide: {
      display: 'none',
    },
    avatarImage: {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: 'auto',
      objectFit: 'cover',
    },
  },
  { name: 'profile-avatar' },
);

export { profileAvatarSize };
export default useStyles;

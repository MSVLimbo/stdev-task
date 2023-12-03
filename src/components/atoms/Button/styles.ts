import { createUseStyles } from 'react-jss';
import { StylesConfig } from '../../../config';

import { ellipsisText, onHover, RTL } from '../../../styles/utils/styleHelpers';
import { FontWeights } from '../../../styles/utils/fonts';
import Transitions from '../../../styles/utils/transitions';

import { ButtonSizeTypes, ButtonStyleTypes, IButtonSizes } from './types';
import stylesConfig from '../../../config/stylesConfig';
const skinningStyles = {
  [ButtonStyleTypes.High]: {
    border: ({ isButton }: any) => isButton && 'none',
    backgroundColor: ({ skin }: any) => skin.base,
    color: ({ skin }: any) => skin.text,

    [onHover()]: {
      '&:hover': {
        backgroundColor: ({ skin }: any) => skin.action,
        color: ({ skin }: any) => skin.textAction,
      },
    },
    [onHover(false)]: {
      '&:active': {
        backgroundColor: ({ skin }: any) => skin.action,
        color: ({ skin }: any) => skin.textAction,
      },
    },
    '&.active': {
      backgroundColor: ({ skin }: any) => skin.action,
      color: ({ skin }: any) => skin.textAction,
    },
    '&.disabled': {
      backgroundColor: ({ skin }: any) => skin.alpha05,
      color: ({ skin }: any) => skin.alpha10,
      cursor: 'not-allowed',
    },
    // '&:focus': {
    //   backgroundColor: ({ skin }: any) => skin.action,
    //   color: ({ skin }: any) => skin.textAction,
    // },
  },
  [ButtonStyleTypes.Normal]: {
    border: ({ isButton }: any) => isButton && 'none',
    backgroundColor: ({ skin }: any) => skin.alpha2,
    color: ({ skin }: any) => skin.base,

    [onHover()]: {
      '&:hover': {
        backgroundColor: ({ skin }: any) => skin.alpha3,
        color: ({ skin }: any) => skin.action,
      },
    },
    [onHover(false)]: {
      '&:active': {
        backgroundColor: ({ skin }: any) => skin.alpha3,
        color: ({ skin }: any) => skin.action,
      },
    },
    '&.active': {
      backgroundColor: ({ skin }: any) => skin.alpha,
      color: ({ skin }: any) => skin.action,
    },
    '&.disabled': {
      backgroundColor: ({ skin }: any) => skin.alpha05,
      color: ({ skin }: any) => skin.alpha10,
      cursor: 'not-allowed',
    },
    // '&:focus': {
    //   backgroundColor: ({ skin }: any) => skin.alpha3,
    //   color: ({ skin }: any) => skin.action,
    // },
  },
  [ButtonStyleTypes.Low]: {
    border: ({ isButton }: any) => isButton && 'none',
    backgroundColor: 'transparent',
    color: ({ skin }: any) => skin.base,

    [onHover()]: {
      '&:hover': {
        backgroundColor: ({ skin }: any) => skin.alpha10,
        color: ({ skin }: any) => skin.action,
      },
    },
    [onHover(false)]: {
      '&:active': {
        backgroundColor: ({ skin }: any) => skin.alpha10,
        color: ({ skin }: any) => skin.action,
      },
    },
    '&.active': {
      backgroundColor: ({ skin }: any) => skin.alpha2,
      color: ({ skin }: any) => skin.action,
    },
    '&.disabled': {
      backgroundColor: 'transparent',
      color: ({ skin }: any) => skin.alpha2,
      cursor: 'not-allowed',
    },
  },
  [ButtonStyleTypes.Ghost]: {
    border: ({ isButton }: any) => isButton && 'none',
    boxShadow: ({ skin }: any) => `0 0 0 2px inset ${skin.alpha3}`,
    backgroundColor: 'transparent',
    color: ({ skin }: any) => skin.base,

    [onHover()]: {
      '&:hover': {
        boxShadow: '0 0 0 2px inset transparent',
        backgroundColor: ({ skin }: any) => skin.alpha3,
        color: ({ skin }: any) => skin.action,
      },
    },
    [onHover(false)]: {
      '&:active': {
        boxShadow: '0 0 0 2px inset transparent',
        backgroundColor: ({ skin }: any) => skin.alpha3,
        color: ({ skin }: any) => skin.action,
      },
    },
    '&.active': {
      boxShadow: '0 0 0 2px inset transparent',
      backgroundColor: ({ skin }: any) => skin.alpha3,
      color: ({ skin }: any) => skin.action,
    },
    '&.disabled': {
      boxShadow: ({ skin }: any) => `0 0 0 2px inset ${skin.alpha05}`,
      backgroundColor: 'transparent',
      color: ({ skin }: any) => skin.alpha10,
      cursor: 'not-allowed',
    },
  },
  [ButtonStyleTypes.LowGhost]: {
    border: `1px solid ${stylesConfig.backgrounds.bg5}`,
    backgroundColor: 'transparent',
    color: ({ skin }: any) => skin.text,
    transition: '.4s all',

    [onHover()]: {
      '&:hover': {
        // boxShadow: ({ skin }: any) => `0 0 0 2px inset ${skin.action}`,
        border: ({ skin }: any) => `1px solid ${skin.action}`,
        backgroundColor: ({ skin }: any) => skin.alpha3,
        color: ({ skin }: any) => skin.action,
      },
    },
    [onHover(false)]: {
      '&:active': {
        // boxShadow: ({ skin }: any) => `0 0 0 2px inset ${skin.action}`,
        border: ({ skin }: any) => `1px solid ${skin.action}`,
        backgroundColor: ({ skin }: any) => skin.alpha3,
        color: ({ skin }: any) => skin.action,
      },
    },
    '&.active': {
      // boxShadow: ({ skin }: any) => `0 0 0 2px inset ${skin.action}`,
      border: ({ skin }: any) => `1px solid ${skin.action}`,
      backgroundColor: ({ skin }: any) => skin.alpha3,
      color: ({ skin }: any) => skin.action,
    },
    '&.disabled': {
      border: ({ skin }: any) => `1px solid ${skin.alpha05}`,
      backgroundColor: 'transparent',
      color: ({ skin }: any) => skin.alpha10,
      cursor: 'not-allowed',
    },
  },
};

const buttonSizes: Record<string, IButtonSizes> = {
  [ButtonSizeTypes.XXLarge]: {
    minWidth: 110,
    height: 52,
    borderRadius: StylesConfig.borderRadiuses.radius4,
    padding: [0, 32],
    fontSize: 18,
    lineHeight: 22,
    iconSize: 24,
    iconSpacing: 8,
  },
  [ButtonSizeTypes.XLarge]: {
    minWidth: 100,
    height: 48,
    borderRadius: StylesConfig.borderRadiuses.radius4,
    padding: [0, 28],
    fontSize: 16,
    lineHeight: 20,
    iconSize: 22,
    iconSpacing: 6,
  },
  [ButtonSizeTypes.Large]: {
    minWidth: 90,
    height: 40,
    borderRadius: StylesConfig.borderRadiuses.radius4,
    padding: [0, 22],
    fontSize: 16,
    lineHeight: 20,
    iconSize: 20,
    iconSpacing: 4,
  },
  [ButtonSizeTypes.Medium]: {
    minWidth: 80,
    height: 36,
    borderRadius: StylesConfig.borderRadiuses.radius4,
    padding: [0, 20],
    fontSize: 14,
    lineHeight: 18,
    iconSize: 18,
    iconSpacing: 4,
  },
  [ButtonSizeTypes.Small]: {
    minWidth: 70,
    height: 30,
    borderRadius: StylesConfig.borderRadiuses.radius3,
    padding: [0, 16],
    fontSize: 12,
    lineHeight: 14,
    iconSize: 16,
    iconSpacing: 4,
  },
  [ButtonSizeTypes.XSmall]: {
    minWidth: 60,
    height: 24,
    borderRadius: StylesConfig.borderRadiuses.radius3,
    padding: [0, 12],
    fontSize: 10,
    lineHeight: 12,
    iconSize: 14,
    iconSpacing: 2,
  },
};

const useStyles = createUseStyles(
  {
    '@keyframes rotation': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    root: {
      display: 'inline-flex',
      outline: 'none !important',
      verticalAlign: 'top',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: (props: any) => !props.centerIcon && props.size.minWidth,
      width: (props: any) => (props.centerIcon && props.size.height) || '100%',
      height: (props: any) => props.size.height,
      borderRadius: (props: any) => (props.centerIcon ? '50%' : props.size.borderRadius),
      padding: (props: any) => !props.centerIcon && [props.size.padding],
      transitionProperty: 'background-color, box-shadow, color',
      transitionDuration: Transitions.Default,
      transitionTimingFunction: 'ease',
      position: (props: any) => props.isUploadButton && 'relative',
      cursor: (props: any) => !props.href && 'pointer',
    },
    ...skinningStyles,
    control: {
      display: 'block',
      visibility: 'hidden',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    inner: {
      display: 'block',
      maxWidth: '100%',
      height: (props: any) => props.size.iconSize,
      paddingInlineStart: (props: any) => props.leftIcon && props.size.iconSpacing,
      paddingInlineEnd: (props: any) => props.rightIcon && props.size.iconSpacing,
      fontWeight: (props: any) => props.hasContent && FontWeights.SemiBold,
      fontSize: (props: any) => props.hasContent && props.size.fontSize,
      lineHeight: (props: any) => `${props.size.lineHeight}px`,
      ...ellipsisText,
      position: (props: any) => (props.leftIcon || props.rightIcon) && 'relative',
    },
    icon: {
      display: (props: any) => (props.centerIcon && 'inline-flex') || 'inline-block',
      justifyContent: 'center',
      verticalAlign: 'top',
      width: (props: any) => props.size.iconSize,
      height: (props: any) => props.size.iconSize,
      fontSize: (props: any) => props.size.iconSize,
      color: 'currentcolor',
    },
    waitIcon: {
      display: (props: any) => (props.centerIcon && 'inline-flex') || 'inline-block',
      justifyContent: 'center',
      verticalAlign: 'top',
      width: (props: any) => props.size.iconSize,
      height: (props: any) => props.size.iconSize,
      fontSize: (props: any) => props.size.iconSize,
      color: 'currentcolor',
      animation: '$rotation 2s linear forwards infinite',
    },
    iconLeft: {
      top: 0,

      [RTL()]: {
        left: 0,
      },
    },
    iconRight: {
      top: 0,

      [RTL()]: {
        right: 0,
      },
      [RTL(false)]: {
        left: 0,
      },
    },
  },
  { name: 'button' },
);

export { buttonSizes };
export default useStyles;

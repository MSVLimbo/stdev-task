import { createUseStyles } from 'react-jss';
import { StylesConfig } from '../../../config';

import { onHover, RTL } from '../../../styles/utils/styleHelpers';
import Transitions from '../../../styles/utils/transitions';
import { FontWeights } from '../../../styles/utils/fonts';

const useStyles = createUseStyles(
  {
    root: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '100%',
      minHeight: 24,
      position: 'relative',
      cursor: 'pointer',
      outline: 'none !important',
      '&:focus': {
        '& > $text': {
          color: StylesConfig.texts.alpha8,
        },
      },

      [RTL()]: {
        paddingLeft: 30,
      },
      [RTL(false)]: {
        paddingRight: 30,
      },

      [onHover()]: {
        '&:hover': {
          '& > $text': {
            color: StylesConfig.texts.alpha8,
          },
        },
      },
      [onHover(false)]: {
        '&:active': {
          '& > $text': {
            color: StylesConfig.texts.alpha8,
          },
        },
      },
    },
    default: {
      '& > $icon': {
        color: StylesConfig.texts.alpha2,
      },

      [onHover()]: {
        '&:hover': {
          '& > $icon': {
            color: StylesConfig.primary.alpha4,
          },
        },
      },
      [onHover(false)]: {
        '&:active': {
          '& > $icon': {
            color: StylesConfig.primary.alpha4,
          },
        },
      },
      '&:focus': {
        '& > $text': {
          color: StylesConfig.texts.alpha8,
        },
        '& > $icon': {
          color: StylesConfig.texts.alpha4,
        },
      },
    },
    active: {
      '& > $icon': {
        color: StylesConfig.primary.base,
      },

      [onHover()]: {
        '&:hover': {
          '& > $icon': {
            color: StylesConfig.primary.action,
          },
        },
      },
      [onHover(false)]: {
        '&:active': {
          '& > $icon': {
            color: StylesConfig.primary.action,
          },
        },
      },
    },
    checkbox: {
      display: 'none',
    },
    icon: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: 24,
      height: 24,
      fontSize: 24,
      // color: StylesConfig.texts.alpha2,
      position: 'absolute',
      top: 0,
      transition: `color ${Transitions.Default} ease`,

      [RTL()]: {
        left: 0,
      },
      [RTL(false)]: {
        right: 0,
      },
    },
    text: {
      display: 'block',
      fontWeight: FontWeights.Bold,
      fontSize: 14,
      // color: StylesConfig.texts.alpha6,
      lineHeight: '24px',
      transition: `color ${Transitions.Default} ease`,
    },
  },
  { name: 'checkbox-text' },
);

export default useStyles;

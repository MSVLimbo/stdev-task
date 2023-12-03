import { StylesConfig } from '../../../config';
import { createUseStyles } from 'react-jss';
import { FontWeights } from '../../../styles/utils/fonts';
import { LoadingSizes } from './types';

const useStyles = createUseStyles(
  {
    '@keyframes roll': {
      '0%': {
        transform: 'translate(-50%, -50%) rotate(0deg)',
      },
      '100%': {
        transform: 'translate(-50%, -50%) rotate(360deg)',
      },
    },
    root: {
      padding: 64,
      fontWeight: FontWeights.Bold,
      fontSize: 64,
      color: '#fff',
      textAlign: 'center',
    },
    local: {
      textAlign: 'center',
    },
    fullscreen: {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: ({ zIndex }: any) => zIndex,
      backgroundColor: StylesConfig.backgrounds.modalBg,
    },
    [LoadingSizes.Large]: {
      '& > $loader': {
        width: 200,
        height: 200,
      },
    },
    [LoadingSizes.Medium]: {
      '& > $loader': {
        width: 150,
        height: 150,
      },
    },
    [LoadingSizes.Small]: {
      '& > $loader': {
        width: 100,
        height: 100,
      },
    },
    loader: {
      display: 'inline-block',
      verticalAlign: 'top',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    slice: {
      display: 'block',
      border: 'none',
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      '&:nth-child(1)': {
        width: '100%',
        height: '100%',
        borderTop: `3px solid ${StylesConfig.primary.base}`,
        animation: `$roll 1.5s linear forwards infinite`,
      },
      '&:nth-child(2)': {
        width: '90%',
        height: '90%',
        borderTop: `3px solid ${StylesConfig.primary.base}`,
        animation: `$roll 1.4s linear forwards infinite`,
      },
      '&:nth-child(3)': {
        width: '80%',
        height: '80%',
        borderTop: `3px solid ${StylesConfig.primary.base}`,
        animation: `$roll 1.3s linear forwards infinite`,
      },
      '&:nth-child(4)': {
        width: '70%',
        height: '70%',
        borderTop: `3px solid ${StylesConfig.primary.base}`,
        animation: `$roll 1.2s linear forwards infinite`,
      },
      '&:nth-child(5)': {
        width: '60%',
        height: '60%',
        borderTop: `3px solid ${StylesConfig.primary.base}`,
        animation: `$roll 1.1s linear forwards infinite`,
      },
    },
  },
  { name: 'loading' },
);

export default useStyles;

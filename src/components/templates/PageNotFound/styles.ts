import { createUseStyles } from 'react-jss';
import { StylesConfig } from '../../../config';

const useStyles = createUseStyles(
  {
    root: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    content: {
      padding: 50,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: 370,
      width: 370,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
    },
    heading: {
      color: StylesConfig.texts.base,
      fontSize: 64,
      fontWeight: '700',
    },
    text: {
      color: StylesConfig.texts.alpha6,
    },
    logo: {
      width: 56,
    },
    button: {
      width: 'auto',
      marginTop: 30,
      '& > span': {
        fontSize: 14,
        fontWeight: 'normal',
      },
    },

    '@media (max-width: 767px)': {
      root: {
        backgroundSize: 'contain',
        width: '90%',
        margin: [0, 'auto'],
      },
      content: {
        backgroundSize: 'contain',
        height: 300,
        width: 300,
      },
      button: {
        marginTop: 70,
        padding: 16,
      },
    },
  },
  {
    name: '404-page',
  },
);

export default useStyles;

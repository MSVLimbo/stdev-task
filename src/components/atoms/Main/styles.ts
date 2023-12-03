import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    root: {
      gridArea: 'main',
      zIndex: 2,
    },

    '@media (max-width: 991px)': {
      root: {

      },
    },
  },
  { name: 'main' },
);

export default useStyles;

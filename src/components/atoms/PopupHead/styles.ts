import { createUseStyles } from 'react-jss';
import { StylesConfig } from '../../../config';

import { FontWeights } from '../../../styles/utils/fonts';

const useStyles = createUseStyles(
  {
    root: {},
    logoHolder: {
      height: 32,
      marginBottom: 4,
    },
    logo: {
      display: 'block',
      maxWidth: '100%',
      height: '100%',
      margin: [0, 'auto'],
    },
    title: {
      display: 'block',
      fontWeight: FontWeights.Bold,
      fontSize: 20,
      color: StylesConfig.primary.base,
      textAlign: 'center',

      '&:first-letter': {
        textTransform: 'capitalize',
      },
    },
  },
  { name: 'popup-head' },
);

export default useStyles;

import { createUseStyles } from 'react-jss';
import { StylesConfig } from '../../../config';

import { FontWeights } from '../../../styles/utils/fonts';
import { RTL } from '../../../styles/utils/styleHelpers';

const useStyles = createUseStyles(
  {
    root: {
      display: 'block',
      minHeight: 18,
      fontWeight: FontWeights.Medium,
      fontSize: 12,
      color: StylesConfig.statuses.error,
      lineHeight: '18px',
      position: 'relative',
    },
    icon: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: 18,
      height: 18,
      fontSize: 18,

      [RTL()]: {
        float: 'left',
        marginRight: 4,
      },
      [RTL(false)]: {
        float: 'right',
        marginLeft: 4,
      },
    },
  },
  { name: 'input-error' },
);

export default useStyles;

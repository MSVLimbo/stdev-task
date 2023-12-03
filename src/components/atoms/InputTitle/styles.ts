import { createUseStyles } from 'react-jss';
import { StylesConfig } from '../../../config';

import { FontWeights } from '../../../styles/utils/fonts';
import { RTL } from '../../../styles/utils/styleHelpers';

import { InputTitleStyleTypes } from './types';

const useStyles = createUseStyles(
  {
    root: {
      fontWeight: FontWeights.Medium,
      fontSize: ({ size }: any) => size.fontSize,
      lineHeight: ({ size }: any) => size.lineHeight,
      position: 'relative',
      display: 'flex',
      '&:first-letter': {
        textTransform: 'capitalize',
      },
    },
    [InputTitleStyleTypes.Default]: {
      color: StylesConfig.texts.alpha5,
    },
    [InputTitleStyleTypes.Disabled]: {
      color: StylesConfig.texts.alpha05,
    },
    required: {
      color: StylesConfig.statuses.warning,
    },
    hasInfo: {
      position: 'relative',

      [RTL()]: {
        paddingRight: 22,
      },
      [RTL(false)]: {
        paddingLeft: 22,
      },
    },
  },
  { name: 'input-title' },
);

export default useStyles;

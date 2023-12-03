import { createUseStyles } from 'react-jss';
import { StylesConfig } from '../../../config';

import { onHover, RTL } from '../../../styles/utils/styleHelpers';
import Transitions from '../../../styles/utils/transitions';

const useStyles = createUseStyles(
  {
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr',
      gridTemplateAreas: '"head" "body" "foot"',
      width: '100vw',
      maxWidth: 460,
      padding: 36,
      borderRadius: StylesConfig.borderRadiuses.radius4,
      backgroundColor: StylesConfig.backgrounds.bg5,
      position: 'relative',
    },
    button: {
      display: 'inline-block',
      width: 36,
      height: 36,
      border: 'none',
      outline: 'none !important',
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 12,
      cursor: 'pointer',

      [onHover()]: {
        '&:hover': {
          '& > $icon': {
            color: StylesConfig.statuses.error,
          },
        },
      },
      [onHover(false)]: {
        '&:active': {
          '& > $icon': {
            color: StylesConfig.statuses.error,
          },
        },
      },
      '&:focus': {
        '& > $icon': {
          color: StylesConfig.statuses.error,
        },
      },
    },
    close: {
      [RTL()]: {
        right: 12,
      },
      [RTL(false)]: {
        left: 12,
      },
    },
    icon: {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: 18,
      height: 18,
      fontSize: 18,
      color: StylesConfig.secondary.base,
      transition: `color ${Transitions.Default} ease`,
    },
    head: {
      gridArea: 'head',
      maxWidth: 436,
      minWidth: 0,
    },
    body: {
      gridArea: 'body',
      maxWidth: 436,
      minWidth: 0,
      paddingTop: ({ hasHead }: any) => hasHead && 16,
    },
    foot: {
      gridArea: 'foot',
      maxWidth: 436,
      minWidth: 0,
      paddingTop: 24,
    },

    '@media (max-width: 767px)': {
      root: {
        height: 'inherit',
        overflowY: 'auto',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },

      foot: {
        paddingTop: 10,
      },
    },
  },
  { name: 'popup' },
);

export default useStyles;

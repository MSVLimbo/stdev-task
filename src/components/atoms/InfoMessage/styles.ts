import { createUseStyles } from 'react-jss';
import { StylesConfig } from '../../../config';
import { onHover, RTL } from '../../../styles/utils/styleHelpers';

const useStyles = createUseStyles(
  {
    root: {
      display: 'inline-block',
      width: 18,
      height: 18,
      position: 'absolute',
      top: 0,
      bottom: 0,
      margin: ['auto', 0],

      [RTL()]: {
        right: 0,
      },
      [RTL(false)]: {
        left: 0,
      },
    },
    icon: {
      display: 'block',
      width: '100%',
      height: '100%',
      fontSize: 18,
      cursor: 'help',
    },
    text: {
      visibility: 'hidden',
      width: 'fit-content',
      minWidth: 180,
      backgroundColor: StylesConfig.statuses.info,
      color: StylesConfig.texts.alpha5,
      padding: [6, 10],
      textAlign: 'left',
      borderRadius: '6px',
      lineHeight: '16px',
      position: 'absolute',
      zIndex: '1',
      bottom: 25,
      right: -15,
      fontSize: 12,
      '&:after': {
        content: '""',
        position: 'absolute',
        right: 16,
        bottom: '-7px',
        borderLeft: '7px solid transparent',
        borderRight: '7px solid transparent',
        borderTop: '9px solid #626E83',
        zIndex: '999',
        width: 0,
        height: 0,
      },
    },
    visible: {
      right: 0,
      left: 'unset',
      visibility: 'visible',
    },
    isHovered: {
      [onHover()]: {
        '&:hover ': {
          '& > $span': { visibility: 'visible' },
        },
      },
    },
    '@media (max-width: 991px)': {
      text: {
        right: -15,
      },
    },
  },
  { name: 'info-message' },
);

export default useStyles;

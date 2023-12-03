import { createUseStyles } from 'react-jss';

import { StylesConfig } from '../config';
import AccessibilityStyles from '../styles/utils/accessibility';
import { FontWeights, Fonts } from '../styles/utils/fonts';
import { IconFonts, IconStyles } from '../styles/utils/icons';
import Resetters from '../styles/utils/resetters';
import { mozScrollbars, selection, scrollbars, RTL } from '../styles/utils/styleHelpers';


const useStyles = createUseStyles(
    {
      '@font-face': [IconFonts,...Fonts],
      '@global': {
        ...Resetters,
        html: {
          minHeight: '-webkit-fill-available',
          textRendering: 'optimizeLegibility',
          fontFeatureSettings: 'normal',
          '-webkit-font-smoothing': 'antialiased',
          '-webkit-text-size-adjust': 'none',
          '-webkit-tap-highlight-color': 'transparent',
          fontFamily: `STDEV-Fonts, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, Helvetica, Arabic, sans-serif`,
          backgroundColor: StylesConfig.backgrounds.htmlBg,
          // minWidth: 1280,
          ...mozScrollbars(),
          ...scrollbars({ borderRadius: StylesConfig.borderRadiuses.radius2, width: 8 }),
          ...AccessibilityStyles,
        },
        ...IconStyles,
        ...selection(),
        ...StylesConfig.overrides,
        '#root': {
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          gridTemplateColumns: '1fr',
          gridTemplateAreas: '"header" "main" "footer"',
          minHeight: '100vh',
          '-webkit-user-select': 'none',
          userSelect: 'none',
        },
        '.scroll-disabled': {
          position: 'fixed',
          overflowY: 'auto',
          width: '100%',
        },
        '.common-pages': {
          fontWeight: FontWeights.SemiBold,
          fontSize: 16,
          color: StylesConfig.texts.base,
          lineHeight: '20px',

          '& .scrollable': {
            paddingBottom: 4,
            overflowX: 'auto',
            overflowY: 'hidden',
            ...scrollbars({ borderRadius: StylesConfig.borderRadiuses.radius2 }),
            ...mozScrollbars(),
          },
          '& table': {
            minWidth: '100%',
            borderCollapse: 'collapse',
            whiteSpace: 'nowrap',
            textAlign: 'center',
          },
          '& thead': {
            backgroundColor: StylesConfig.backgrounds.bg5,
          },
          '& tr': {},
          '& th, & td': {
            padding: 14,
          },
          '& th': {},
          '& td': {},
          '& ul': {
            listStyleType: 'none',

            '& li': {
              marginBottom: 36,

              '&:last-child': {
                marginBottom: 0,
              },
            },
          },
          '& ol': {
            listStyleType: 'none',
            margin: [24, 0],

            '& li': {
              marginBottom: 8,
              position: 'relative',

              [RTL()]: {
                paddingLeft: 14,
              },
              [RTL(false)]: {
                paddingRight: 14,
              },

              '&:before': {
                content: '""',
                display: 'inline-block',
                width: 5,
                height: 5,
                borderRadius: 5,
                backgroundColor: StylesConfig.texts.alpha8,
                position: 'absolute',
                top: 0,
                bottom: 0,
                margin: ['auto', 0],

                [RTL()]: {
                  left: 0,
                },
                [RTL(false)]: {
                  right: 0,
                },
              },

              '&:last-child': {
                marginBottom: 0,
              },
            },
          },
          '& strong': {
            display: 'block',
          },
          '& span': {
            display: 'block',
            fontWeight: FontWeights.Normal,
            fontSize: 14,
            color: StylesConfig.texts.alpha8,
            lineHeight: '18px',
          },
          '& p': {
            marginTop: 20,
            fontWeight: FontWeights.Normal,
            fontSize: 14,
            color: StylesConfig.texts.alpha4,
            lineHeight: '20px',
          },
        },
        '.grecaptcha-badge': {
          opacity: '0!important',
        },
        '@media (max-width: 767px)': {
          'body.active': {
            overflow: 'hidden',
          },
        },
      },
    },
    { name: 'app' },
);

export default useStyles;

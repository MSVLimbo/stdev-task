enum FontWeights {
  Thin = 100,
  ExtraLight = 200,
  Light = 300,
  Normal = 'normal',
  Medium = 500,
  SemiBold = 600,
  Bold = 'bold',
  ExtraBold = 800,
  Black = 900,
}

enum FontStyles {
  Normal = 'normal',
  Italic = 'italic',
  Oblique = 'oblique',
}

enum FontFormats {
  WOFF = 'woff',
  WOFF2 = 'woff2',
  EOT = 'eot',
  TTF = 'truetype',
  SVG = 'svg',
}

interface IFontFaceFallback {
  src: string;
}

export interface IFontFace {
  fontFamily: string;
  fontStyle: FontStyles;
  fontWeight: FontWeights;
  fallbacks: Array<IFontFaceFallback>;
  fontDisplay: string;
  unicodeRange?: string;
}

const fontFamilyName = 'STDEV-Fonts';
const fontFamilyPath = 'fonts';
const Fonts: Array<IFontFace> = [
  {
    fontFamily: fontFamilyName,
    fontStyle: FontStyles.Normal,
    fontWeight: FontWeights.Thin,
    fallbacks: [
      { src: 'local("Font Thin"), local("Font-Thin")' },
      {
        src: `url("/${fontFamilyPath}/Font-Thin.ttf?h=${import.meta.env.VITE_APP_HASH_VERSION}") format('${FontFormats.TTF}')`,
      },
    ],
    fontDisplay: 'swap',
    unicodeRange: 'U+0020—007F',
  },
  {
    fontFamily: fontFamilyName,
    fontStyle: FontStyles.Normal,
    fontWeight: FontWeights.ExtraLight,
    fallbacks: [
      { src: 'local("Font ExtraLight"), local("Font-ExtraLight")' },
      {
        src: `url("/${fontFamilyPath}/Font-ExtraLight.ttf?h=${import.meta.env.VITE_APP_HASH_VERSION}") format('${FontFormats.TTF}')`,
      },
    ],
    fontDisplay: 'swap',
    unicodeRange: 'U+0020—007F',
  },
  {
    fontFamily: fontFamilyName,
    fontStyle: FontStyles.Normal,
    fontWeight: FontWeights.Light,
    fallbacks: [
      { src: 'local("Font Light"), local("Font-Light")' },
      {
        src: `url("/${fontFamilyPath}/Font-Light.ttf?h=${import.meta.env.VITE_APP_HASH_VERSION}") format('${FontFormats.TTF}')`,
      },
    ],
    fontDisplay: 'swap',
    unicodeRange: 'U+0020—007F',
  },
  {
    fontFamily: fontFamilyName,
    fontStyle: FontStyles.Normal,
    fontWeight: FontWeights.Normal,
    fallbacks: [
      { src: 'local("Font Regular"), local("Font-Regular")' },
      {
        src: `url("/${fontFamilyPath}/Font-Regular.ttf?h=${import.meta.env.VITE_APP_HASH_VERSION}") format('${FontFormats.TTF}')`,
      },
    ],
    fontDisplay: 'swap',
    unicodeRange: 'U+0020—007F',
  },
  {
    fontFamily: fontFamilyName,
    fontStyle: FontStyles.Normal,
    fontWeight: FontWeights.Medium,
    fallbacks: [
      { src: 'local("Font Medium"), local("Font-Medium")' },
      {
        src: `url("/${fontFamilyPath}/Font-Medium.ttf?h=${import.meta.env.VITE_APP_HASH_VERSION}") format('${FontFormats.TTF}')`,
      },
    ],
    fontDisplay: 'swap',
    unicodeRange: 'U+0020—007F',
  },
  {
    fontFamily: fontFamilyName,
    fontStyle: FontStyles.Normal,
    fontWeight: FontWeights.SemiBold,
    fallbacks: [
      { src: 'local("Font SemiBold"), local("Font-SemiBold")' },
      {
        src: `url("/${fontFamilyPath}/Font-SemiBold.ttf?h=${import.meta.env.VITE_APP_HASH_VERSION}") format('${FontFormats.TTF}')`,
      },
    ],
    fontDisplay: 'swap',
    unicodeRange: 'U+0020—007F',
  },
  {
    fontFamily: fontFamilyName,
    fontStyle: FontStyles.Normal,
    fontWeight: FontWeights.Bold,
    fallbacks: [
      { src: 'local("Font Bold"), local("Font-Bold")' },
      {
        src: `url("/${fontFamilyPath}/Font-Bold.ttf?h=${import.meta.env.VITE_APP_HASH_VERSION}") format('${FontFormats.TTF}')`,
      },
    ],
    fontDisplay: 'swap',
    unicodeRange: 'U+0020—007F',
  },
  {
    fontFamily: fontFamilyName,
    fontStyle: FontStyles.Normal,
    fontWeight: FontWeights.ExtraBold,
    fallbacks: [
      { src: 'local("Font ExtraBold"), local("Font-ExtraBold")' },
      {
        src: `url("/${fontFamilyPath}/Font-ExtraBold.ttf?h=${import.meta.env.VITE_APP_HASH_VERSION}") format('${FontFormats.TTF}')`,
      },
    ],
    fontDisplay: 'swap',
    unicodeRange: 'U+0020—007F',
  },
  {
    fontFamily: fontFamilyName,
    fontStyle: FontStyles.Normal,
    fontWeight: FontWeights.Black,
    fallbacks: [
      { src: 'local("Font Black"), local("Font-Black")' },
      {
        src: `url("/${fontFamilyPath}/Font-Black.ttf?h=${import.meta.env.VITE_APP_HASH_VERSION}") format('${FontFormats.TTF}')`,
      },
    ],
    fontDisplay: 'swap',
    unicodeRange: 'U+0020—007F',
  },
];

export { FontFormats, FontWeights, FontStyles, Fonts };

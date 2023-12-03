/* eslint-disable import/no-cycle */
import { lighten, opacify } from '../styles/utils/colorScheme';
import { onHover } from '../styles/utils/styleHelpers';
import { ColorStyles } from './colorStyles.ts';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// ############################################
// Backgrounds Start ##########################
// ############################################
const { bgBaseColor1 } = ColorStyles; // Right
const { bgBaseColor2 } = ColorStyles; // Right
const { bgBaseColor3 } = ColorStyles; // Right
// ############################################
// Backgrounds End ############################
// ############################################
// Text Colors Start ##########################
// ############################################
const { textBaseColor } = ColorStyles;
// ############################################
// Text Colors End ############################
// ############################################
// Primary Colors Start #######################
// ############################################
const { primaryColor } = ColorStyles;
const primaryActionColor = lighten(primaryColor, 20);
const { primaryTextColor } = ColorStyles;
const { primaryTextActionColor } = ColorStyles;
// ############################################
// Primary Colors End #########################
// ############################################
// Secondary Colors Start #######################
// ############################################
const { secondaryColor } = ColorStyles;
const secondaryActionColor = lighten(secondaryColor, 15);
const { secondaryTextColor } = ColorStyles;
const { secondaryTextActionColor } = ColorStyles;
// ############################################
// Secondary Colors End #######################
// ############################################
// Tertiary Colors Start #######################
// ############################################
const { tertiaryColor } = ColorStyles;
const tertiaryActionColor = lighten(primaryColor, 10);
const { tertiaryTextColor } = ColorStyles;
const { tertiaryTextActionColor } = ColorStyles;
// ############################################
// Tertiary Colors End #######################
// ############################################

const backgroundColors = [
  bgBaseColor1,
  lighten(bgBaseColor1, 2),
  lighten(bgBaseColor1, 3),
  lighten(bgBaseColor1, 5),
  bgBaseColor2,
  lighten(bgBaseColor2, 2),
  lighten(bgBaseColor2, 3),
  lighten(bgBaseColor2, 5),
  bgBaseColor3,
  lighten(bgBaseColor3, 2),
  lighten(bgBaseColor3, 3),
  lighten(bgBaseColor3, 5),
];

const textColors = [
  textBaseColor,
  opacify(textBaseColor, 90),
  opacify(textBaseColor, 80),
  opacify(textBaseColor, 70),
  opacify(textBaseColor, 60),
  opacify(textBaseColor, 50),
  opacify(textBaseColor, 40),
  opacify(textBaseColor, 30),
  opacify(textBaseColor, 20),
  opacify(textBaseColor, 10),
  opacify(textBaseColor, 5),
];

const StylesConfig = {
  backgrounds: {
    htmlBg: bgBaseColor1,
    modalBg: opacify('#000', 20),
    gameBg: opacify('#000', 70),
    bg1: backgroundColors[0],
    bg2: backgroundColors[1],
    bg3: backgroundColors[2],
    bg4: backgroundColors[3],
    bg5: backgroundColors[4],
    bg6: backgroundColors[5],
    bg7: backgroundColors[6],
    bg8: backgroundColors[7],
    bg9: backgroundColors[8],
    bg10: backgroundColors[9],
    bg11: backgroundColors[10],
    bg12: backgroundColors[11],
  },
  texts: {
    base: textColors[0],
    alpha9: textColors[1],
    alpha8: textColors[2],
    alpha7: textColors[3],
    alpha6: textColors[4],
    alpha5: textColors[5],
    alpha4: textColors[6],
    alpha3: textColors[7],
    alpha2: textColors[8],
    alpha1: textColors[9],
    alpha05: textColors[10],
  },
  primary: {
    base: primaryColor,
    action: primaryActionColor,
    text: primaryTextColor,
    textAction: primaryTextActionColor,
    alpha9: opacify(primaryColor, 90),
    alpha8: opacify(primaryColor, 80),
    alpha7: opacify(primaryColor, 70),
    alpha6: opacify(primaryColor, 60),
    alpha5: opacify(primaryColor, 50),
    alpha4: opacify(primaryColor, 40),
    alpha3: opacify(primaryColor, 30),
    alpha2: opacify(primaryColor, 20),
    alpha10: opacify(primaryColor, 10),
    alpha05: opacify(primaryColor, 5),
  },
  secondary: {
    base: secondaryColor,
    action: secondaryActionColor,
    text: secondaryTextColor,
    textAction: secondaryTextActionColor,
    alpha9: opacify(secondaryColor, 90),
    alpha8: opacify(secondaryColor, 80),
    alpha7: opacify(secondaryColor, 70),
    alpha6: opacify(secondaryColor, 60),
    alpha5: opacify(secondaryColor, 50),
    alpha4: opacify(secondaryColor, 40),
    alpha3: opacify(secondaryColor, 30),
    alpha2: opacify(secondaryColor, 20),
    alpha10: opacify(secondaryColor, 10),
    alpha05: opacify(secondaryColor, 5),
  },
  tertiary: {
    base: tertiaryColor,
    action: tertiaryActionColor,
    text: tertiaryTextColor,
    textAction: tertiaryTextActionColor,
    alpha9: opacify(tertiaryColor, 90),
    alpha8: opacify(tertiaryColor, 80),
    alpha7: opacify(tertiaryColor, 70),
    alpha6: opacify(tertiaryColor, 60),
    alpha5: opacify(tertiaryColor, 50),
    alpha4: opacify(tertiaryColor, 40),
    alpha3: opacify(tertiaryColor, 30),
    alpha2: opacify(tertiaryColor, 20),
    alpha10: opacify(tertiaryColor, 10),
    alpha05: opacify(tertiaryColor, 5),
  },
  absolute: ColorStyles.absolute,
  statuses: ColorStyles.statuses,
  borderRadiuses: {
    radius1: 2,
    radius2: 4,
    radius3: 6,
    radius4: 8,
    radius5: 10,
    radius6: 12,
    radius7: 16,
    radius8: 18,
  },
  overrides: {
    '.Miqo': {
      backgroundColor: 'red',

      [onHover()]: {
        '&:hover': {
          backgroundColor: 'orange',
        },
      },
    },
  },
};

export default Object.freeze(StylesConfig);

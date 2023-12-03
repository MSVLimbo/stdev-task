import { colord } from 'colord';

export const lighten = (color: string, amount = 0): string =>
  colord(color)
    .lighten(amount / 100)
    .toHex();
export const darken = (color: string, amount = 0): string =>
  colord(color)
    .darken(amount / 100)
    .toHex();
export const saturate = (color: string, amount = 0): string =>
  colord(color)
    .saturate(amount / 100)
    .toHex();
export const desaturate = (color: string, amount = 0): string =>
  colord(color)
    .desaturate(amount / 100)
    .toHex();
export const opacify = (color: string, amount = 0): string =>
  colord(color)
    .alpha(amount / 100)
    .toRgbString();
export const invert = (color: string): string => colord(color).invert().toHex();
export const rotateHue = (color: string, degree: number): string =>
  colord(color).rotate(degree).toHex();

export interface IGenerateColorConfig {
  color: string;
  hue?: number; // float number e.g. 0.1
  saturation?: number; // float number e.g. 0.1
  lightness?: number; // float number e.g. 0.1
  alpha?: number; // float number e.g. 0.1
  invertColor?: boolean;
}

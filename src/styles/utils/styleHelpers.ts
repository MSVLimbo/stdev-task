/* eslint-disable */
// @ts-nocheck

import { StylesConfig } from '../../config';

const RTL = (isLeft = true): string => `[dir=${isLeft ? 'ltr' : 'rtl'}] & `;
const ignoreRTL = (): string => '[dir] & ';
const ellipsisText = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};
const onHover = (isHover = true): string => `@media (hover: ${isHover ? 'hover' : 'none'})`;

interface ISelection {
  backgroundColor?: string;
  color?: string;
}

const selection = ({
  backgroundColor = StylesConfig.primary.base,
  color = StylesConfig.absolute.blackText,
}: ISelection = {}): Record<string, Record<string, string>> => ({
  '::-moz-selection': {
    backgroundColor,
    color,
  },
  '::selection': {
    backgroundColor,
    color,
  },
});

interface IMozScrollbars {
  railColor?: string;
  thumbColor?: string;
}

const mozScrollbars = ({
  thumbColor = StylesConfig.primary.base,
  railColor = StylesConfig.backgrounds.bg1,
}: IMozScrollbars = {}): Record<string, string> => ({
  scrollbarColor: `${thumbColor} ${railColor}`,
  scrollbarWidth: 'thin',
});

enum ScrollbarCoverage {
  Local = '&',
  Global = '',
}

interface IScrollbars {
  coverage?: ScrollbarCoverage;
  width?: number;
  height?: number;
  borderRadius?: number;
  trackBackgroundColor?: string;
  trackHoverBackgroundColor?: string;
  thumbBackgroundColor?: string;
  thumbHoverBackgroundColor?: string;
}

const scrollbars = ({
  coverage = ScrollbarCoverage.Local,
  width = 4,
  height = 4,
  borderRadius = 0,
  trackBackgroundColor = StylesConfig.backgrounds.bg1,
  trackHoverBackgroundColor = '',
  thumbBackgroundColor = StylesConfig.primary.base,
  thumbHoverBackgroundColor = StylesConfig.primary.action,
}: IScrollbars = {}): Record<string, any> => {
  const styles = {
    [`${coverage}::-webkit-scrollbar`]: {
      width,
      height,
      borderRadius,
    },
    [`${coverage}::-webkit-scrollbar-track`]: {
      borderRadius,
      backgroundColor: trackBackgroundColor,

      [onHover()]: {
        '&:hover': {
          backgroundColor: trackHoverBackgroundColor,
        },
      },
    },
    [`${coverage}::-webkit-scrollbar-thumb`]: {
      borderRadius,
      backgroundColor: thumbBackgroundColor,

      [onHover()]: {
        '&:hover': {
          backgroundColor: thumbHoverBackgroundColor,
        },
      },
    },
  };

  return styles;
};

const hideScrollbars = {
  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

const placeHolders = (color: string): Record<string, Record<string, string>> => ({
  '&::-webkit-input-placeholder': {
    color,
  },
  '&:-ms-input-placeholder': {
    color,
  },
  '&::placeholder': {
    color,
  },
});

const placeHolderShown = (color?: string): Record<string, Record<string, string>> => ({
  '&:placeholder-shown': {
    color,
  },
});

const inputTypeNumberWithoutArrows = {
  '&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
  },
  '&::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
  },
  '-moz-appearance': 'textfield',
};

const inputTypeCalendarWithoutArrows = {
  '&::-webkit-calendar-picker-indicator': {
    display: 'none',
  },
};

const removeAutocompleteBackground = {
  // eslint-disable-next-line max-len
  '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus textarea:-webkit-autofill, &:-webkit-autofill:hover textarea:-webkit-autofill:focus, &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus':
    {
      // boxShadow: `0 0 0 1000px ${color} inset !important`,
      transitionProperty: 'background-color, color',
      transitionDuration: 0,
      transitionDelay: '100000000s',
      transitionTimingFunction: 'ease',
    },
};

const textOverflowHidden = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

export {
  RTL,
  ignoreRTL,
  ellipsisText,
  onHover,
  selection,
  mozScrollbars,
  scrollbars,
  hideScrollbars,
  placeHolders,
  placeHolderShown,
  inputTypeNumberWithoutArrows,
  inputTypeCalendarWithoutArrows,
  removeAutocompleteBackground,
  textOverflowHidden,
};

/* function mergeStyles(...objects) {
    return objects.reduce((final, object) => {
        Object.entries(object).forEach(([key, value]) => {
            final[key] = { ...(final[key] || {}), ...value };
        });
        return final;
    }, {});
}

function deepMergeStyles(...objects: object[]) {
    const isObject = (obj: any) => obj && typeof obj === 'object';

    function deepMergeInner(target: object, source: object) {
        Object.keys(source).forEach((key: string) => {
            const targetValue = target[key];
            const sourceValue = source[key];

            if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
                target[key] = targetValue.concat(sourceValue);
            } else if (isObject(targetValue) && isObject(sourceValue)) {
                target[key] = deepMergeInner(Object.assign({}, targetValue), sourceValue);
            } else {
                target[key] = sourceValue;
            }
        });

        return target;
    }

    if (objects.length < 2) {
        throw new Error('DeepMerge: this function expects at least 2 objects to be provided');
    }

    if (objects.some(object => !isObject(object))) {
        throw new Error('DeepMerge: all values should be of type "object"');
    }

    const target = objects.shift();
    let source: object;

    while (source = objects.shift()) {
        deepMergeInner(target, source);
    }

    return target;
}

// Todo fit Interface for undeling
const mediaQuery = (breakPoint : any): string => `@media screen and (max-width: ${breakPoint}px)`;

const canHover = (isHover = true): string => `@media (hover: ${isHover ? 'hover' : 'none'})`;

const isLeftToRight = (isLeft = true): string => `[dir=${isLeft ? 'ltr' : 'rtl'}] & `;

const ignoreRTL = (): string => '[dir] & ';

const supports = (prop: string, value: string): string => `@supports (${prop}: ${value})`;

const supportsNot = (prop: string, value: string): string => `@supports not (${prop}: ${value})`;

const removeAutocompleteBackground = (color : string) : Record<string, string> => ({
    // eslint-disable-next-line max-len
    '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus textarea:-webkit-autofill, &:-webkit-autofill:hover textarea:-webkit-autofill:focus, &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus': {
        boxShadow: `0 0 0 1000px ${color} inset !important`,
    },
});

function isLightMode() {
    return '@media (prefers-color-scheme: light)';
}

function isDarkMode() {
    return '@media (prefers-color-scheme: dark)';
}

function isLandscape() {
    return '@media screen and (orientation: landscape)';
}

function isPortrait() {
    return '@media screen and (orientation: portrait)';
}

function isOS() {
    return '@supports (-webkit-touch-callout: none)';
}

export {
    mergeStyles,
    deepMergeStyles,
    supports,
    selection,
    canHover,
    scrollbars,
    ScrollbarCoverage,
    mediaQuery,
    mediaQueryOld,
    ignoreRTL,
    supportsNot,
    placeHolders,
    placeHolderShown,
    isLeftToRight,
    mozScrollbars,
    hideScrollbars,
    textOverflowHidden,
    inputTypeNumberWithoutArrows,
    removeAutocompleteBackground,
    isLightMode,
    isDarkMode,
    isLandscape,
    isPortrait,
    isOS,
}; */

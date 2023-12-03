import {createUseStyles} from 'react-jss';
import {StylesConfig} from '../../../config';

import {FontWeights} from '../../../styles/utils/fonts';
import {
    inputTypeCalendarWithoutArrows,
    inputTypeNumberWithoutArrows,
    onHover,
    removeAutocompleteBackground,
    RTL,
} from '../../../styles/utils/styleHelpers';
import Transitions from '../../../styles/utils/transitions';

import {InputStyleTypes} from './types';

const inputStyles = {
    [InputStyleTypes.Disabled]: {
        pointerEvents: 'not-allowed',

        '& > $control': {
            borderColor: ({size}: any) => size.borderWidth && StylesConfig.backgrounds.bg8,
            color: StylesConfig.primary.alpha05,
        },
        '& > $typeIcon': {
            color: StylesConfig.primary.alpha05,
        },
        '& > $actionIcon': {
            color: StylesConfig.primary.alpha05,
        },
    },
    [InputStyleTypes.Default]: {
        '& > $control': {
            borderColor: ({size}: any) => size.borderWidth && StylesConfig.primary.base,
            color: StylesConfig.primary.alpha4,
        },
        '& > $typeIcon': {
            color: StylesConfig.primary.alpha3,
        },
        '& > $actionIcon': {
            color: StylesConfig.primary.alpha3,
        },
    },
    [InputStyleTypes.Hover]: {
        '& > $control': {
            borderColor: ({size}: any) => size.borderWidth && StylesConfig.primary.alpha2,
            color: StylesConfig.primary.alpha4,
        },
        '& > $typeIcon': {
            color: StylesConfig.primary.alpha5,
        },
        '& > $actionIcon': {
            color: StylesConfig.primary.alpha5,
        },
    },
    [InputStyleTypes.FilledFocus]: {
        '& > $control': {
            borderColor: ({size}: any) => size.borderWidth && StylesConfig.primary.alpha4,
            color: StylesConfig.primary.base,
        },
        '& > $typeIcon': {
            color: StylesConfig.primary.base,
        },
        '& > $actionIcon': {
            color: StylesConfig.primary.base,
        },
    },
    [InputStyleTypes.FilledHover]: {
        '& > $control': {
            borderColor: ({size}: any) => size.borderWidth && StylesConfig.primary.alpha6,
            color: StylesConfig.primary.base,
        },
        '& > $typeIcon': {
            color: StylesConfig.primary.base,
        },
        '& > $actionIcon': {
            color: StylesConfig.primary.base,
        },
    },
    [InputStyleTypes.Selectable]: {
        pointerEvents: 'not-allowed',
        '& > $control': {
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'flex-start',
            borderColor: ({size}: any) => size.borderWidth && StylesConfig.primary.base,
            color: StylesConfig.primary.alpha5,
            [onHover()]: {
                '&:hover': {
                    borderColor: StylesConfig.primary.alpha2,
                },
            },
            '&.active': {
                borderColor: StylesConfig.primary.alpha4,
            },
        },
        '& > $typeIcon': {
            color: StylesConfig.primary.base,
        },
        '& > $actionIcon': {
            color: StylesConfig.primary.base,
        },
    },
    [InputStyleTypes.NonUsable]: {
        pointerEvents: 'none',
        '& > $control': {
            borderColor: ({size}: any) => size.borderWidth && StylesConfig.primary.alpha2,
            color: StylesConfig.primary.alpha5,
        },
        '& > $typeIcon': {
            color: StylesConfig.primary.alpha3,
        },
        '& > $actionIcon': {
            color: StylesConfig.primary.alpha3,
        },
    },
};

const useStyles = createUseStyles(
    {
        root: {
            display: 'block',
            position: 'relative',
        },
        control: {
            display: 'block',
            width: '100%',
            height: ({size}: any) => size.height,
            borderRadius: ({size}: any) => size.borderRadius,
            borderStyle: ({size}: any) => size.borderWidth && 'solid',
            borderWidth: ({size}: any) => size.borderWidth,
            outline: 'none !important',
            backgroundColor: 'transparent',
            fontWeight: FontWeights.Medium,
            fontSize: ({size}: any) => size.fontSize,
            transitionProperty: 'border, background-color, color',
            transitionDuration: Transitions.Default,
            transitionTimingFunction: 'ease',
            ...inputTypeNumberWithoutArrows,
            ...inputTypeCalendarWithoutArrows,
            ...removeAutocompleteBackground,

            '&:-internal-autofill-selected': {
                backgroundColor: 'blue !important',
                appearance: 'none !important',
            },
        },
        ...inputStyles,
        hasNoIcons: {
            padding: ({size}: any) => `0 ${size.defaultPadding}px`,
        },
        hasTypeIcon: {
            [RTL()]: {
                padding: ({size}: any) => `0 ${size.defaultPadding}px 0 ${size.iconPadding}px`
            },
            [RTL(false)]: {
                padding: ({size}: any) => `0 ${size.iconPadding}px 0 ${size.defaultPadding}px`,
            },
        },
        hasActionIcon: {
            [RTL()]: {
                padding: ({size}: any) => `0 ${size.iconPadding}px 0 ${size.defaultPadding}px`,
            },
            [RTL(false)]: {
                padding: ({size}: any) => `0 ${size.defaultPadding}px 0 ${size.iconPadding}px`
            },
        },
        hasBothIcons: {
            padding: ({size}: any) => `0 ${size.iconPadding}px`,
        },
        icon: {
            display: 'inline-block',
            width: ({size}: any) => size.iconSize,
            height: ({size}: any) => size.iconSize,
            fontSize: ({size}: any) => size.iconSize,
            position: 'absolute',
            top: 0,
            bottom: 0,
            margin: ['auto', 0],
            transition: `color ${Transitions.Default} ease`,
        },
        typeIcon: {
            pointerEvents: 'none',

            [RTL()]: {
                left: ({size}: any) => size.iconPosition,
            },
            [RTL(false)]: {
                right: ({size}: any) => size.iconPosition,
            },
        },
        actionIcon: {
            transition: `color ${Transitions.Default} ease`,
            cursor: 'pointer',

            [RTL()]: {
                right: ({size}: any) => size.iconPosition,
            },
            [RTL(false)]: {
                left: ({size}: any) => size.iconPosition,
            },

            [onHover()]: {
                '&:hover': {
                    color: StylesConfig.primary.action,
                },
            },
            [onHover(false)]: {
                '&:active': {
                    color: StylesConfig.primary.action,
                },
            },
        },
    },
    {name: 'input'},
);

export default useStyles;

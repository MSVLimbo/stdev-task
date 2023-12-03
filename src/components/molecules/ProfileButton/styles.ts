import {createUseStyles} from 'react-jss';

import {StylesConfig} from '../../../config';
import {onHover} from '../../../styles/utils/styleHelpers';
import Transitions from '../../../styles/utils/transitions';
import {FontWeights} from '../../../styles/utils/fonts';

import {IProfileButtonSizes, ProfileButtonSizeTypes} from './types';

const profileButtonSizes: Record<string, IProfileButtonSizes> = {
    [ProfileButtonSizeTypes.XXLarge]: {
        size: 52,
        fontSize: 52,
    },
    [ProfileButtonSizeTypes.XLarge]: {
        size: 48,
        fontSize: 48,
    },
    [ProfileButtonSizeTypes.Large]: {
        size: 40,
        fontSize: 40,
    },
    [ProfileButtonSizeTypes.Medium]: {
        size: 36,
        fontSize: 18,
    },
    [ProfileButtonSizeTypes.Small]: {
        size: 30,
        fontSize: 30,
    },
    [ProfileButtonSizeTypes.XSmall]: {
        size: 30,
        fontSize: 48,
    },
};

const useStyles = createUseStyles(
    {
        root: {
            position: 'relative',
        },
        button: {
            display: 'block',
            width: ({sizes}: any) => sizes.size,
            height: ({sizes}: any) => sizes.size,
            border: 'none',
            borderRadius: '50%',
            outline: 'none',
            backgroundColor: StylesConfig.secondary.alpha2,
            fontWeight: FontWeights.SemiBold,
            fontSize: ({fontSize}: any) => fontSize,
            color: StylesConfig.texts.base,
            lineHeight: 1,
            textTransform: 'uppercase',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',

            '&:after': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
                border: `2px solid ${StylesConfig.primary.base}`,
                borderRadius: 'inherit',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0,
                transitionProperty: 'box-shadow, opacity',
                transitionDuration: Transitions.Default,
                transitionTimingFunction: 'ease',
            },
        },
        default: {
            [onHover()]: {
                '&:hover': {
                    '&:after': {
                        opacity: 1,
                    },
                },
            },
            [onHover(false)]: {
                '&:active': {
                    '&:after': {
                        opacity: 1,
                    },
                },
            },
        },
        active: {
            '&:after': {
                opacity: 1,
                boxShadow: `0 0 0 2px inset ${StylesConfig.backgrounds.bg3}`,
            },
        },
        imageHide: {
            display: 'none',
        },
        avatarImage: {
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            margin: 'auto',
            objectFit: 'cover',
        },
    },
    {name: 'profile-button'},
);

export {profileButtonSizes};
export default useStyles;

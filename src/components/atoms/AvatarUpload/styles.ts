import {StylesConfig} from '../../../config';
import {createUseStyles} from 'react-jss';
import {FontWeights} from '../../../styles/utils/fonts';
import {onHover} from '../../../styles/utils/styleHelpers';
import Transitions from '../../../styles/utils/transitions';

const useStyles = createUseStyles(
    {
        root: {},
        label: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 72,
            height: 72,
            borderRadius: '50%',
            backgroundImage: 'url("/avatar.png")',
            backgroundSize: 72,
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',

            [onHover()]: {
                '&:hover': {
                    '& > $overlay': {
                        opacity: 1,
                    },
                },
            },
            [onHover(false)]: {
                '&:active': {
                    '& > $overlay': {
                        opacity: 1,
                    },
                },
            },
            '&:focus': {
                '& > $overlay': {
                    opacity: 1,
                },
            },
        },
        control: {
            display: 'block',
            width: '100%',
            height: '100%',
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
        },

        abbr: {
            display: 'inline-block',
            height: 24,
            fontWeight: FontWeights.Bold,
            fontSize: 20,
            color: StylesConfig.texts.base,
            lineHeight: '24px',
        },
        image: {
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
        },
        imageHide: {
            display: 'none',
        },
        overlay: {
            display: 'block',
            width: 64,
            height: 64,
            borderRadius: 'inherit',
            fontSize: 34,
            color: StylesConfig.texts.base,
            opacity: 0,
            padding: 5,
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            margin: 'auto',
            backgroundColor: StylesConfig.backgrounds.bg3,
            transition: `opacity ${Transitions.Default} ease`,

            '&:before': {
                display: 'inline-block',
                width: 24,
                height: 24,
                position: 'absolute',
                top: '-10px',
                right: 0,
                bottom: 0,
                left: 0,
                margin: 'auto',
            },
        },
        resolution: {
            display: 'block',
            backgroundColor: 'transparent',
            height: 14,
            fontWeight: FontWeights.Normal,
            fontSize: 10,
            color: StylesConfig.texts.base,
            lineHeight: '14px',
            textAlign: 'center',
            paddingTop: 24,
        },

        '@media (max-width: 991px)': {
            label: {
                width: 48,
                height: 48,
                margin: [0, 15, 0, 0],
            },
            overlay: {
                width: 48,
                height: 48,
            },
        },
    },
    {name: 'avatar-upload'},
);

export default useStyles;

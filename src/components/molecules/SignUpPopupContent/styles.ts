import {createUseStyles} from 'react-jss';
import {StylesConfig} from '../../../config';

import {onHover} from '../../../styles/utils/styleHelpers';
import Transitions from '../../../styles/utils/transitions';

const marginBottom = 8;

const useStyles = createUseStyles(
    {
        root: {},
        block: {
            marginBottom,
        },
        recaptchaBlock: {
            marginBottom,
        },
        datePicker: {
            marginBottom,
        },
        gender: {
            display: 'flex',
            outline: 'none !important',

            '& > label': {
                display: 'flex',
                cursor: 'pointer',
            },
        },
        marginLeft: {
            marginLeft: 10,
        },
        agreeBlocks: {},
        agreeBlock: {
            marginBottom,

            '&:last-child': {
                marginBottom: 0,
            },
        },
        title: {
            marginBottom: 6,
        },
        error: {
            marginTop: 6,
        },
        separator: {
            display: 'block',
            height: 1,
            marginBottom,
            backgroundColor: StylesConfig.backgrounds.bg8,
        },
        optionsHolder: {
            padding: [0, 14],
            marginBottom,
        },
        sections: {
            display: 'grid',
            gridTemplateRows: '1fr',
            flexWrap: 'wrap',
            gap: 8,
        },
        sectionsGender: {
            gridTemplateColumns: '1fr 1fr 1fr',
        },
        section: {
            minWidth: 0,
        },
        link: {
            color: StylesConfig.primary.base,
            display: 'contents',
            padding: '0 10px',
            transition: `color ${Transitions.Default} ease`,

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
        countryBlock: {
            marginBottom,
        },
        countryInputField: {
            '& input': {
                paddingRight: '30px !important',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                outline: 'none !important',
                display: 'inline-block !important',
                textAlign: 'left',
            },
        },
        image: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding:10,
        },
        row:{
            display: 'flex',
            justifyContent:'space-between',
            gap:10
        },
        '@media (max-width: 767px)': {
            optionsHolder: {
                padding: 0,
            },
        },
    },
    {name: 'registration-popup-content'},
);

export default useStyles;

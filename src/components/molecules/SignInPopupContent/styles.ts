import {createUseStyles} from 'react-jss';
import {StylesConfig} from '../../../config';

const useStyles = createUseStyles(
    {
        root: {
            display: 'grid',
            gridTemplateRows: '1fr auto',
            gridTemplateColumns: '1fr',
            height: '100%',
        },
        loginSection: {},
        passwordSection: {
            marginTop: 16,
        },
        title: {
            marginBottom: 6,
            fontSize: 16,
            lineHeight: '22px',
        },
        messageHolder: {
            display: 'flex',
            justifyContent: 'start',
            marginTop: 16,
        },
        options: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginTop: 16,
        },
        optionHolder: {
            minWidth: 0,
        },
        rememberMe: {
            color: `${StylesConfig.texts.alpha7}`,
        },

        '@media (max-width: 767px)': {
            options: {
                padding: 0,
            },
            root: {
                display: 'block',
            },
        },
    },
    {name: 'sign-in-popup'},
);

export default useStyles;

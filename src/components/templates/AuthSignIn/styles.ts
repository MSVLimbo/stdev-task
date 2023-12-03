import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles(
    {
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            margin: 'auto',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
        },
    },
    {
        name: 'auth-sign-in',
    },
);

export default useStyles;

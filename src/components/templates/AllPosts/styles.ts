import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles(
    {
        root: {
            display: 'flex',
            flexDirection:'column'
        },
    },
    {
        name: 'all-posts',
    },
);

export default useStyles;

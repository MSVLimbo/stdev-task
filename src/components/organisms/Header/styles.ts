import {createUseStyles} from 'react-jss';
import {StylesConfig} from '../../../config';

const useStyles = createUseStyles(
    {
        root: {
            gridArea: 'header',
            position: 'fixed',
            width: '100%',
            zIndex: 3,
        },
        top: {
            display: 'flex',
            justifyContent: 'space-between',
            height: 50,
            padding: [0, 20],
            backgroundColor: StylesConfig.backgrounds.bg3,
        },
        topSides: {
            height: '100%',
        },
        topLeftSides: {
            minWidth: 0,
            padding: [10, 0],
        },
        logoLink: {
            display: 'block',
        },
        logo: {
            display: 'block',
            height: '100%',
        },
        topRightSides: {
            display: 'flex',
            gap: 10,
            alignItems:'center',
            justifyContent:'center',
            minWidth: 0,
            padding: [7, 0],
        },
        actions: {
            display: 'flex',
            height: '100%',
            gap: 10,
        },
        link:{
            display:'flex',
            alignItems:'center'
        }
    },
    {name: 'header'},
);

export default useStyles;

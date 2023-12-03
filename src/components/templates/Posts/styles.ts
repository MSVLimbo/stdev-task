import {createUseStyles} from 'react-jss';
import {StylesConfig} from "../../../config";

const useStyles = createUseStyles(
    {
        root: {
            height: '100%',
            display: 'flex',
            flexDirection:'column',
            backgroundColor:StylesConfig.backgrounds.bg3
        },
        header: {
            height: 50
        },
        content: {
            minWidth: 0,
            minHeight: 0,
        }
    },
    {
        name: 'posts',
    },
);

export default useStyles;

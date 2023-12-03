import {createUseStyles} from 'react-jss';
import {StylesConfig} from "../../../config";

const useStyles = createUseStyles(
    {
        actions: {
            display: 'flex',
            alignItems:'center',
            flexDirection: 'column'
        },
        actionHolder: {
            marginBottom: 10,
            width: 'fit-content',


            '&:last-child': {
                marginBottom: 0,
            },
        },
        signUp:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
        },
        link:{
            paddingLeft:5,
            color:StylesConfig.primary.base
        }
    },
    {name: 'sign-in-popup'},
);

export default useStyles;

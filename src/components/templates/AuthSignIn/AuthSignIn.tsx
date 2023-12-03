import {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router';

import IAuthSign from './types';

import useStyles from './styles';
import SignInPopup from "../../organisms/SignInPopup";
import {getGeneralState} from "../../../store/slices/generalSlice/slice.ts";

// eslint-disable-next-line no-empty-pattern
function AuthSignIn({}: IAuthSign) {
    const styles = useStyles();
    const navigate = useNavigate();
    const {profile} = useSelector(getGeneralState);
    const isLoggedIn = useCallback(() => !!profile, [profile]);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/dashboard');
        }
    }, [isLoggedIn, navigate]);


    return (
        <div className={styles.root}>
            <SignInPopup/>
        </div>
    );
}

export default AuthSignIn;

import {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router';

import IAuthSign from './types';

import useStyles from './styles';
import SignUpPopup from "../../organisms/SignUpPopup";
import {getGeneralState} from "../../../store/slices/generalSlice/slice.ts";

// eslint-disable-next-line no-empty-pattern
function AuthSignUp({}: IAuthSign) {
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
            <SignUpPopup/>
        </div>
    );
}

export default AuthSignUp;

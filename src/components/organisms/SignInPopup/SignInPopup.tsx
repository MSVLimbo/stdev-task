import {BaseSyntheticEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

import SignInPopupContent from '../../molecules/SignInPopupContent';
import PopupHead from '../../atoms/PopupHead';
import {Button} from '../../atoms/Button';
import Popup from '../../atoms/Popup';

import {ButtonSizeTypes} from '../../atoms/Button/types';
import {useNavigate} from 'react-router';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';
import {useLocation} from 'react-router-dom';
import useStyles from './styles';

import type {SignInPopupProps} from './types';
import {ILoginUserDto} from '../../../types/iLoginUserDto';
import {signIn} from '../../../store/actions/generalActions';
import {validateSignIn} from './utils';
import Link from "../../atoms/Link";

function SignInPopup({onClose, className, withRedirect = false}: SignInPopupProps) {
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const navigate = useNavigate();
    const location = useLocation();
    const styles = useStyles();
    const {t} = useTranslation();

    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [userData, setUserData] = useState<ILoginUserDto>({
        email: {value: '', errors: []},
        password: {value: '', errors: []},
        rememberMe: {value: false, errors: []},
    });

    const handleSize = (height: number, sizes: any) => {
        switch (true) {
            case height <= 768 && height > 400:
                return sizes.Small;
            case height <= 991:
                return sizes.Medium;
            case height <= 1080:
                return sizes.XLarge;
            case height <= 1200:
                return sizes.XXLarge;
            default:
                return sizes.XSmall;
        }
    };

    const handleChange = useCallback(({target}: BaseSyntheticEvent) => {
        setUserData(prevState => ({
            ...prevState,
            [target.name]: {value: target.value.trim(), errors: []},
        }));
        setError('');
    }, []);

    const handleRememberMe = (data: any) => {
        setUserData(prevState => ({...prevState, rememberMe: data}));
    };

    const handleSubmit = useCallback(async () => {
        if (isValid) {
            dispatch(
                signIn({
                    userData,
                    navigate,
                    path: `${location.pathname}${location.search}`,
                }),
            ).then(
                () => {
                    setError('');
                    withRedirect && navigate('/');
                },
                err => setError(err?.key),
            );
        }
    }, [dispatch, withRedirect, navigate, userData, location.pathname, location.search, isValid]);

    const handleOpenSignUp = useCallback(() => {
        navigate('/register');
    }, [dispatch, navigate, onClose]);

    const onEnter = (event: any) => {
        if (
            (event.code === 'Enter' || event.code === 'NumpadEnter') &&
            !validateSignIn(userData.email.value, 'login') &&
            !validateSignIn(userData.password.value, 'password')
        ) {
            handleSubmit();
        }
    };

    const handleValidate = (name: string) => {
        // @ts-ignore
        const err = validateSignIn(userData[name].value, name);
        // @ts-ignore
        err && setUserData(prev => ({...prev, [name]: {value: prev[name].value, errors: err}}));
    };

    useEffect(() => {
        if (!userData.email.errors.length && !userData.password.errors.length) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [userData]);

    return (
        <Popup
            className={className}
            handleSubmit={onEnter}
            head={<PopupHead hideLogo={true} title={t('sign-in-popup.title')}/>}
            body={
                <SignInPopupContent
                    handleSize={handleSize}
                    userData={userData}
                    onChange={handleChange}
                    onRememberMe={handleRememberMe}
                    validateData={handleValidate}
                    error={error}
                />
            }
            foot={
                <div className={styles.actions}>
                    <div className={styles.actionHolder}>
                        <Button
                            size={ButtonSizeTypes.Large}
                            onClick={handleSubmit}
                            disabled={!isValid}
                            debounceInterval={1000}
                        >
                            {`${t('sign-in-popup.button.sign-in')}`}
                        </Button>
                    </div>
                    <div className={styles.signUp}>
                        <div>
                            {`${t('sign-in-popup.pre-register')}`}
                        </div>
                        <div className={styles.actionHolder}>
                            <Link
                                className={styles.link}
                                onClick={handleOpenSignUp} href={'/register'}>
                                {`${t('sign-in-popup.button.create-an-account')}`}
                            </Link>
                        </div>
                    </div>


                </div>
            }
            onClose={onClose}
        />
    );
}

export default SignInPopup;

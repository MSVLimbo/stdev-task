import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

import PopupHead from '../../atoms/PopupHead';
import {Button} from '../../atoms/Button';
import Popup from '../../atoms/Popup';

import {ButtonSizeTypes} from '../../atoms/Button/types';
import useStyles from './styles';

import type {SignInPopupProps} from './types';
import Link from "../../atoms/Link";
import SignUpPopupContent from "../../molecules/SignUpPopupContent";
import {SignUpErrorMessage} from "../../../types/SignUpErrorMessage.ts";
import {SignUpPopupContentOutput} from "../../molecules/SignUpPopupContent/types.ts";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {Action, ThunkDispatch} from "@reduxjs/toolkit";
import {signIn, signUp} from "../../../store/actions/generalActions.ts";

function SignUpPopup({onClose, className}: SignInPopupProps) {
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const navigate = useNavigate();
    const styles = useStyles();
    const {t} = useTranslation();
    const [content, setContent] = useState<SignUpPopupContentOutput>({
        isValid: false,
    });

    const [error, setError] = useState<SignUpErrorMessage>({});


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

    const handleChange = useCallback(
        (popupContent: SignUpPopupContentOutput) => setContent(popupContent),
        [],
    );

    const handleSubmit = async () => {
        if (content.isValid) {
            // @ts-ignore
            const {firstName, lastName, email, password, image} = content?.data;
            // const formData = new FormData();
            // const abbr = email.indexOf('@');
            // // @ts-ignore
            // formData.append('file', image as Blob, abbr);

            dispatch(signUp({
                "first-name": firstName, "last-name": lastName, email: email, image: image, password: password,
            })).then(() => {
                dispatch(
                    signIn({
                        userData: {
                            email,
                            password
                        },
                        navigate,
                        path: '/'
                    }),
                )
            }).catch((err) => {
                setError(err);
            })
        }
    };

    const onEnter = (event: any) => {
        if (
            (event.code === 'Enter' || event.code === 'NumpadEnter') && false
        ) {
            handleSubmit();
        }
    };

    return (
        <Popup
            className={className}
            handleSubmit={onEnter}
            head={<PopupHead hideLogo={true} title={t('sign-up-popup.title')}/>}
            body={
                <SignUpPopupContent
                    handleSize={handleSize}
                    onChange={handleChange}
                    backEndValidationErrors={error}
                />
            }
            foot={
                <div className={styles.actions}>
                    <div className={styles.actionHolder}>
                        <Button
                            size={ButtonSizeTypes.Large}
                            onClick={handleSubmit}
                            disabled={false}
                            debounceInterval={1000}
                        >
                            {`${t('sign-un-popup.button.sign-up')}`}
                        </Button>
                    </div>
                    <div className={styles.signUp}>
                        <div>
                            {`${t('sign-un-popup.pre-login')}`}
                        </div>
                        <div className={styles.actionHolder}>
                            <Link
                                className={styles.link}
                                href={'/login'}>
                                {`${t('sign-up-popup.button.login')}`}
                            </Link>
                        </div>
                    </div>


                </div>
            }
            onClose={onClose}
        />
    );
}

export default SignUpPopup;

import React, {useEffect, useState} from 'react';

import {InputSizeTypes, InputValueTypes} from '../../atoms/Input/types';
import classNames from 'classnames';
import {useSelector} from 'react-redux';
import useStyles from './styles';
import {
    incorporateErrorsFromBackEnd,
    setField,
    SignUpFieldsState,
    SignUpInitialState, validateConfirmPassword,
    validateEmail,
    validateName,
    validatePassword,
    validateRequiredField,
} from './util';
import Field from './components/Field';
import {InputTitleSizeTypes} from '../../atoms/InputTitle/types';
import {getGeneralState} from "../../../store/slices/generalSlice/slice.ts";
import AvatarUpload from "../../atoms/AvatarUpload";
import InputError from "../../atoms/InputError";
import {useTranslation} from "react-i18next";

function SignUpPopupContent({
                                onChange,
                                backEndValidationErrors,
                                handleSize,
                            }: any) {
    const styles = useStyles();
    const {t} = useTranslation();
    const {profile} = useSelector(getGeneralState);
    const viewHeight = window.innerHeight;
    const [showPass, setShowPass] = useState({pass: false, confirm: false});
    const [fieldsState, setFieldsState] = useState<SignUpFieldsState>(SignUpInitialState);

    useEffect(
        () =>
            backEndValidationErrors &&
            incorporateErrorsFromBackEnd(backEndValidationErrors, setFieldsState),
        [backEndValidationErrors],
    );

    useEffect(() => {
        if (
            fieldsState.email?.value?.length ||
            fieldsState.password?.value?.length
        ) {
            sessionStorage.getItem('hasRegisterData') !== 'true' &&
            sessionStorage.setItem('hasRegisterData', 'true');
        } else {
            sessionStorage.removeItem('hasRegisterData');
        }

        const invalid =
            fieldsState.email.isValid &&
            fieldsState.password.isValid &&
            fieldsState.firstName.isValid &&
            fieldsState.lastName.isValid &&
            fieldsState.confirmPassword.isValid &&
            fieldsState.image.isValid
        onChange({
            isValid: invalid,
            data: {
                email: fieldsState.email.value,
                firstName: fieldsState.firstName.value,
                lastName: fieldsState.lastName.value,
                password: fieldsState.password.value,
                confirmPassword: fieldsState.confirmPassword.value,
                image: fieldsState.image.value,
            },
        });
    }, [fieldsState, onChange, profile]);

    const handleChangeShowPass = (key: string) =>
        setShowPass((prev: any) => ({...prev, [key]: !prev[key]}));

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            setField('image', e.target.files[0], setFieldsState);
        }
        const avatarImg = document.getElementById('avatarImg') as HTMLInputElement;

        if (avatarImg) {
            // @ts-ignore
            avatarImg.src = URL.createObjectURL(e.target.files?.[0]);
            avatarImg.onload = () => {
                URL.revokeObjectURL(avatarImg.src);
            };
        }
    };

    return (
        <div className={classNames(styles.root)}>
            <div className={styles.image}>
                <AvatarUpload
                    key={'image'}
                    onChange={handleImageChange}
                    avatar={fieldsState.image.value as File}
                />
                {fieldsState.image.errors && (!Array.isArray(fieldsState.image.errors) || fieldsState.image.errors.length > 0) && (
                    <InputError message={fieldsState.image.errors[0]} className={styles.error}/>
                )}
            </div>
            <div className={styles.row}>
                <Field
                    required
                    key={'firstName'}
                    id={'registration.first-name'}
                    placeholder={t('sign-up-popup.field.first-name.title')}
                    type={InputValueTypes.Text}
                    value={fieldsState.firstName.value}
                    error={fieldsState.firstName.errors}
                    size={handleSize(viewHeight, InputSizeTypes)}
                    titleSize={handleSize(viewHeight, InputTitleSizeTypes)}
                    onChange={event =>
                        validateName(event.target.value) &&
                        setField('firstName', event.target.value, setFieldsState)
                    }
                    onBlur={() =>
                        validateRequiredField('firstName', fieldsState.firstName.value, setFieldsState)
                    }
                />
                <Field
                    required
                    key={'lastName'}
                    placeholder={t('sign-up-popup.field.last-name.title')}
                    type={InputValueTypes.Text}
                    size={handleSize(viewHeight, InputSizeTypes)}
                    titleSize={handleSize(viewHeight, InputTitleSizeTypes)}
                    value={fieldsState.lastName.value}
                    error={fieldsState.lastName.errors}
                    onChange={event =>
                        validateName(event.target.value) &&
                        setField('lastName', event.target.value, setFieldsState)
                    }
                    onBlur={() =>
                        validateRequiredField('lastName', fieldsState.lastName.value, setFieldsState)
                    }
                />
            </div>
            <div className={styles.row}>
                <Field
                    required
                    key={'email'}
                    id={'registration.email'}
                    placeholder={t('sign-up-popup.field.email.title')}
                    type={InputValueTypes.Text}
                    value={fieldsState.email.value}
                    error={fieldsState.email.errors}
                    size={handleSize(viewHeight, InputSizeTypes)}
                    titleSize={handleSize(viewHeight, InputTitleSizeTypes)}
                    onChange={event => setField('email', event.target.value, setFieldsState)}
                    onBlur={() => validateEmail(fieldsState.email.value, setFieldsState)}
                />
            </div>
            <div className={styles.row}>
                <Field
                    required
                    autocomplete={'new-password'}
                    placeholder={t("sign-up-popup.field.password.title")}
                    type={showPass.pass ? InputValueTypes.Text : InputValueTypes.Password}
                    value={fieldsState.password.value}
                    onChange={event => setField('password', event.target.value, setFieldsState)}
                    error={fieldsState.password.errors}
                    actionIcon={showPass.pass ? 'ic-eye-not-visible' : 'ic-eye-visible'}
                    onAction={() => handleChangeShowPass('pass')}
                    onBlur={() => validatePassword(fieldsState.password.value, setFieldsState)}
                    size={handleSize(viewHeight, InputSizeTypes)}
                    titleSize={handleSize(viewHeight, InputTitleSizeTypes)}
                />
                <Field
                    required
                    placeholder={t("sign-up-popup.field.confirm-password.title")}
                    type={showPass.confirm ? InputValueTypes.Text : InputValueTypes.Password}
                    value={fieldsState.confirmPassword.value}
                    onChange={event => setField('confirmPassword', event.target.value, setFieldsState)}
                    error={fieldsState.confirmPassword.errors}
                    actionIcon={showPass.confirm ? 'ic-eye-not-visible' : 'ic-eye-visible'}
                    onAction={() => handleChangeShowPass('confirm')}
                    onBlur={() => validateConfirmPassword(fieldsState.confirmPassword.value, fieldsState.password.value, setFieldsState)}
                    size={handleSize(viewHeight, InputSizeTypes)}
                    titleSize={handleSize(viewHeight, InputTitleSizeTypes)}
                />
            </div>
        </div>
    );
}

export default SignUpPopupContent;

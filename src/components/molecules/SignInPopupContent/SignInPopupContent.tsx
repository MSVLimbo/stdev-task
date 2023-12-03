import {useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';

import {InputSizeTypes, InputValueTypes} from '../../atoms/Input/types';
import CheckboxText from '../../atoms/CheckboxText';
import InputError from '../../atoms/InputError';
import Input from '../../atoms/Input';

import useStyles from './styles';

import type {SignInPopupProps} from './types';
import {InputTitleSizeTypes} from '../../atoms/InputTitle/types';

function SignInPopupContent({
                                userData,
                                onChange,
                                error,
                                onRememberMe,
                                validateData,
                                handleSize,
                            }: SignInPopupProps) {
    const {email, password} = userData;
    const styles = useStyles();
    const {t} = useTranslation();

    const [isVisible, setIsVisible] = useState(false);

    const togglePassword = useCallback(() => setIsVisible(!isVisible), [isVisible]);
    const viewHeight = window.innerHeight;

    return (
        <div className={styles.root}>
            <div className={styles.loginSection}>
                <Input
                    placeholder={t('sign-in-popup.login-field.title')}
                    name="email"
                    type={InputValueTypes.Text}
                    typeIcon="ic-user"
                    value={email.value}
                    onChange={onChange}
                    onBlur={() => validateData('email')}
                    size={handleSize(viewHeight, InputSizeTypes) as keyof typeof InputSizeTypes}
                />
                {userData.email.errors.length ? (
                    <div className={styles.messageHolder}>
                        <InputError message={t(userData.email.errors[0])}/>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div className={styles.passwordSection}>
                <Input
                    placeholder={t('sign-in-popup.password-field.title')}
                    name="password"
                    type={isVisible ? InputValueTypes.Text : InputValueTypes.Password}
                    typeIcon="ic-lock"
                    actionIcon={isVisible ? 'ic-eye-blocked' : 'ic-eye'}
                    onAction={togglePassword}
                    value={password.value}
                    onChange={onChange}
                    onBlur={() => validateData('password')}
                    size={handleSize(viewHeight, InputTitleSizeTypes) as keyof typeof InputTitleSizeTypes}
                />
                {userData.password.errors.length ? (
                    <div className={styles.messageHolder}>
                        <InputError message={t(userData.password.errors[0])}/>
                    </div>
                ) : (
                    ''
                )}
            </div>
            {error && (
                <div className={styles.messageHolder}>
                    <InputError message={t(error)}/>
                </div>
            )}
            <div className={styles.options}>
                <div className={styles.optionHolder}>
                    <CheckboxText
                        classname={styles.rememberMe}
                        onChange={(event: { target: { checked: boolean; }; }) => onRememberMe(event.target.checked)}>
                        {`${t('sign-in-popup.button.remember-me')}`}
                    </CheckboxText>
                </div>
            </div>
        </div>
    );
}

export default SignInPopupContent;

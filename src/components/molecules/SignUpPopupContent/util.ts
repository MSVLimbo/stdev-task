import {Dispatch, SetStateAction} from 'react';
import {SignUpErrorMessage} from '../../../types/SignUpErrorMessage';

export const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordRegex = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
const charactersRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/;

export interface ISignUpFields {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    image: File | null
}

export type SignUpFieldsState = {
    [K in keyof Required<ISignUpFields>]: {
        value: ISignUpFields[K];
        isValid: boolean;
        errors: string[];
    };
};
const trimFields: string[] = [
    'email',
    'firstName',
    'lastName',
];

export function setField<K extends keyof ISignUpFields>(
    key: K,
    value: ISignUpFields[K],
    setFieldsState: Dispatch<SetStateAction<SignUpFieldsState>>,
): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const newValue = trimFields.includes(key) ? value.trim() : value;

    if (key==='confirmPassword'){
        setFieldsState(prev => ({
            ...prev,
            [key]: {...prev[key], value: newValue, errors: [], isValid: prev.password===newValue},
        }));
    }else{
        setFieldsState(prev => ({
            ...prev,
            [key]: {...prev[key], value: newValue, errors: [], isValid: true},
        }));
    }
}

function setErrors<K extends keyof ISignUpFields>(
    key: K,
    errors: string[],
    setFieldsState: Dispatch<SetStateAction<SignUpFieldsState>>,
): void {
    setFieldsState(prev => ({
        ...prev,
        [key]: {...prev[key], errors, isValid: errors.length === 0},
    }));
}

export function validateRequiredField<K extends keyof ISignUpFields>(
    key: K,
    value: ISignUpFields[K] | null | undefined,
    setFieldsState: Dispatch<SetStateAction<SignUpFieldsState>>,
): void {
    const errors = value == null || value === '' ? ['sign-up.fields.error.require'] : [];
    setErrors(key, errors, setFieldsState);
}

export function validateName(value: string): boolean {
    return charactersRegex.test(value);
}

export function validateEmail(
    value: string,
    setFieldsState: Dispatch<SetStateAction<SignUpFieldsState>>,
): void {
    let errors: string[] = [];
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (value) {
        case '':
            errors = ['sign-up.fields.error.require'];
            break;
        default:
            if (!emailRegex.test(value)) {
                errors = ['sign-up.email-filed.error.incorrect-email'];
            }
    }

    setErrors('email', errors, setFieldsState);
}


export function validatePassword(
    value: string,
    setFieldsState: Dispatch<SetStateAction<SignUpFieldsState>>,
): void {
    let errors: string[] = [];
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (value) {
        case '':
            errors = ['sign-up.fields.error.require'];
            break;
        default:
            if (value.length < 4) {
                errors = ['sign-up.password-filed.error.weak-password'];
            }
    }

    setErrors('password', errors, setFieldsState);
}

export function validateConfirmPassword(
    value: string,
    comapreValue: string,
    setFieldsState: Dispatch<SetStateAction<SignUpFieldsState>>,
): void {
    let errors: string[] = [];
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (value) {
        case '':
            errors = ['sign-up.fields.error.require'];
            break;
        default:
            if (value !== comapreValue) {
                errors = ['sign-up.confirm-filed.error.compare'];
            }
    }

    setErrors('confirmPassword', errors, setFieldsState);
}

export function incorporateErrorsFromBackEnd(
    errors: SignUpErrorMessage,
    setFieldsState: Dispatch<SetStateAction<SignUpFieldsState>>,
): void {
    setFieldsState(prev => {
        const copy = {...prev};
        if (errors['first-name']) {
            addErrors('firstName', errors['first-name'], copy);
        }
        if (errors['last-name']) {
            addErrors('lastName', errors['last-name'], copy);
        }
        if (errors.email) {
            addErrors('email', errors.email, copy);
        }
        if (errors.password) {
            addErrors('password', errors.password, copy);
        }
        if (errors.image) {
            addErrors('image', errors.image, copy);
        }
        return copy;
    });
}

function addErrors<K extends keyof ISignUpFields>(
    key: K,
    errors: string[],
    fieldsState: SignUpFieldsState,
): void {
    fieldsState[key].errors.push(...errors);
    fieldsState[key].isValid = fieldsState[key].errors.length === 0;
}

export const SignUpInitialState = {
    firstName: {value: '', errors: [], isValid: false},
    lastName: {value: '', errors: [], isValid: false},
    email: {value: '', errors: [], isValid: false},
    password: {value: '', errors: [], isValid: false},
    confirmPassword: {value: '', errors: [], isValid: false},
    image: {value: null, errors: [], isValid: false},
};

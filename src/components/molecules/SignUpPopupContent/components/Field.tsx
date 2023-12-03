import {BaseSyntheticEvent} from 'react';
import {useTranslation} from 'react-i18next';

import InputError from '../../../atoms/InputError';
import InputTitle from '../../../atoms/InputTitle';
import Input from '../../../atoms/Input';

import {InputSizeTypes, InputValueTypes} from '../../../atoms/Input/types';

import useStyles from '../styles';
import {InputTitleSizeTypes} from '../../../atoms/InputTitle/types';

type FieldProps = {
    type: InputValueTypes;
    title?: string;
    placeholder?: string;
    id?: string;
    error?: string | string[];
    onChange: (event: BaseSyntheticEvent) => void;
    value: string;
    actionIcon?: string;
    required?: boolean;
    onAction?: () => void;
    onBlur?: (event: BaseSyntheticEvent) => void;
    autocomplete?: string;
    infoMessage?: string;
    size?: InputSizeTypes;
    titleSize?: InputTitleSizeTypes;
};

function Field({
                   title,
                   placeholder,
                   type,
                   onChange,
                   error,
                   value,
                   size,
                   titleSize,
                   id,
                   actionIcon,
                   onAction,
                   required = false,
                   onBlur,
                   autocomplete,
                   infoMessage,
               }: FieldProps) {
    const {t} = useTranslation();
    const styles = useStyles();

    return (
        <div className={styles.block}>
            {title && <InputTitle
                title={t(title)}
                className={styles.title}
                isRequired={required}
                infoMessage={infoMessage}
                size={titleSize || InputTitleSizeTypes.XLarge}
            />}
            <Input
                placeholder={placeholder}
                autocomplete={autocomplete}
                onBlur={onBlur}
                onAction={onAction}
                actionIcon={actionIcon}
                type={type}
                id={id}
                onChange={onChange}
                value={value}
                size={size || InputSizeTypes.XLarge}
            />
            {error && (!Array.isArray(error) || error.length > 0) && (
                <InputError message={t(error)} className={styles.error}/>
            )}
        </div>
    );
}

export default Field;

import classNames from 'classnames';
import { ChangeEvent, KeyboardEventHandler, useState, useRef, useEffect } from 'react';

import useStyles from './styles';
import { InputProps, InputSizes, InputSizeTypes, InputStyleTypes } from './types';


// eslint-disable-next-line sonarjs/cognitive-complexity
function Input({
  type,
  id,
  size = InputSizeTypes.XLarge,
  typeIcon,
  actionIcon,
  disabled,
  value = '',
  placeholder,
  tabIndex = 0,
  ariaLabel,
  onChange,
  onAction,
  name,
  required,
  onBlur,
  handleClick,
  selectableInput = false,
  isSelectActive = false,
  nonUsableInput = false,
  autocomplete,
  focus,
  className,
}: InputProps) {
  const styles = useStyles({
    size: InputSizes[size],
  } as any);

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const checkIsFocused = (state: boolean) => setIsFocused(state);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const checkIsHovered = (state: boolean) => setIsHovered(state);

  const [tempValue, setTempValue] = useState<string>(value);
  const currentValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setTempValue(e.target.value);
  };
  const [isActionCalled, setIsActionCalled] = useState<boolean>(false);
  const actionCalled = () => {
    setIsActionCalled(!isActionCalled);
    if (onAction) {
      onAction();
    }
  };

  const textInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textInput.current !== null && focus) {
      textInput.current.focus();
    }
  }, [focus]);

  const keyPressed: KeyboardEventHandler<HTMLElement> = (e: any) => {
    e.preventDefault();
    if (e.code === 'Space' || e.code === 'Enter') {
      actionCalled();
    }
  };

  let style;

  if (disabled) {
    style = styles[InputStyleTypes.Disabled];
  }
  if (!disabled) {
    style = styles[InputStyleTypes.Default];

    if (isHovered && !value) {
      style = styles[InputStyleTypes.Hover];
    }

    if (isFocused || value !== tempValue) {
      style = styles[InputStyleTypes.FilledFocus];
    }

    if (value !== tempValue) {
      setTempValue(value);
    }

    if (!isFocused && isHovered && value) {
      style = styles[InputStyleTypes.FilledHover];
    }

    if (selectableInput) {
      style = styles[InputStyleTypes.Selectable];
    }

    if (nonUsableInput) {
      style = styles[InputStyleTypes.NonUsable];
    }
  }

  return (
    <div
      onFocus={() => checkIsHovered(true)}
      onBlur={() => checkIsHovered(false)}
      onMouseOver={() => checkIsHovered(true)}
      onMouseOut={() => checkIsHovered(false)}
      className={classNames(styles.root, style, className)}
      role="button"
      tabIndex={-1}
      onClick={handleClick}
    >
      {typeIcon && <i className={classNames(styles.icon, styles.typeIcon, typeIcon)} />}
      <input
        name={name}
        id={id}
        autoComplete={autocomplete}
        onFocus={() => checkIsFocused(true)}
        onBlur={(event: any) => {
          onBlur?.(event);
          checkIsFocused(false);
        }}
        onChange={currentValueChanged}
        className={classNames(
          styles.control,
          {
            [styles.hasNoIcons]: !typeIcon && !actionIcon,
            [styles.hasTypeIcon]: typeIcon && !actionIcon,
            [styles.hasActionIcon]: !typeIcon && actionIcon,
            [styles.hasBothIcons]: typeIcon && actionIcon,
          },
          selectableInput && isSelectActive && 'active',
        )}
        type={selectableInput ? 'button' : type}
        placeholder={placeholder}
        value={selectableInput ? tempValue : value}
        disabled={disabled}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        required={required}
        ref={textInput}
      />
      {actionIcon && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <i
          className={classNames(styles.icon, styles.actionIcon, actionIcon)}
          role="button"
          tabIndex={-1}
          onClick={actionCalled}
          onKeyPress={keyPressed}
        />
      )}
    </div>
  );
}

export default Input;

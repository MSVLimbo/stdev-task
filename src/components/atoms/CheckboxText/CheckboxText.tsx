/* eslint-disable react/no-danger */
import classNames from 'classnames';
import { KeyboardEventHandler, useState } from 'react';

import useStyles from './styles';
import ICheckboxText from './types';

function CheckboxText({
  children,
  checked = false,
  onChange,
  tabIndex = 0,
  ariaLabel,
  classname,
}: ICheckboxText) {
  const styles = useStyles();

  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const toggleCheckbox = (event: any) => {
    setIsChecked(!isChecked);
    onChange(event);
  };

  const keyPressed: KeyboardEventHandler<HTMLElement> = (e: any) => {
    e.preventDefault();
    if (e.code === 'Space' || e.code === 'Enter') {
      toggleCheckbox(e);
    }
  };

  return (
    <label
      className={classNames(styles.root, {
        [styles.default]: !isChecked,
        [styles.active]: isChecked,
      },classname)}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="checkbox"
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      aria-checked={isChecked}
      onKeyPress={keyPressed}
    >
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        tabIndex={-1}
      />
      <i
        className={classNames(styles.icon, {
          'ic-checkbox-unchecked': !isChecked,
          'ic-checkbox-checked': isChecked,
        })}
      />
      <span className={styles.text}>{children}</span>
    </label>
  );
}

export default CheckboxText;

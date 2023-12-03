import { memo } from 'react';
import classNames from 'classnames';

import { IButtonInner } from './types';

function ButtonInner({ children, styles, leftIcon, centerIcon, rightIcon, imgLogo }: IButtonInner) {
  return centerIcon || imgLogo ? (
    <>
      {centerIcon && <i className={classNames(styles.icon, centerIcon, styles[centerIcon])} />}
      {imgLogo && <img className={styles.icon} src={imgLogo} alt={''} />}
    </>
  ) : (
    <>
      {leftIcon && <i className={classNames(styles.icon, styles.iconLeft, leftIcon)} />}
      <span className={styles.inner}>{children}</span>
      {rightIcon && <i className={classNames(styles.icon, styles.iconRight, rightIcon)} />}
    </>
  );
}

export default memo(ButtonInner);

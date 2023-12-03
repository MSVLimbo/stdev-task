import { memo } from 'react';
import classNames from 'classnames';

import { StylesConfig } from '../../../config';

import Link from '../Link';
import useStyles, { buttonSizes } from './styles';
import { ButtonSizeTypes, ButtonStyleTypes, ButtonImportanceTypes, IButtonLink } from './types';
import ButtonInner from './ButtonInner';

function ButtonLink({
  children,
  size = ButtonSizeTypes.XLarge,
  importance = ButtonImportanceTypes.Primary,
  style = ButtonStyleTypes.High,
  leftIcon,
  rightIcon,
  centerIcon,
  disabled,
  title,
  tabIndex = 0,
  ariaLabel,
  href,
  target,
  rel,
  download,
  onClick,
  id,
}: IButtonLink) {
  const skin = StylesConfig[importance];
  const styles = useStyles({
    skin,
    size: buttonSizes[size],
    centerIcon,
    leftIcon,
    rightIcon,
    hasContent: !!children,
    href,
    id,
  } as any);

  return (
    <Link
      className={classNames(styles.root, styles[style], { disabled })}
      href={href}
      rel={rel}
      target={target}
      title={title}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      onClick={onClick}
      download={download}
      id={id}
    >
      <ButtonInner
        styles={styles}
        leftIcon={leftIcon}
        centerIcon={centerIcon}
        rightIcon={rightIcon}
      >
        {children}
      </ButtonInner>
    </Link>
  );
}

export default memo(ButtonLink);

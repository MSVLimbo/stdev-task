import { memo, useState } from 'react';
import classNames from 'classnames';



import useStyles, { buttonSizes } from './styles';
import { ButtonImportanceTypes, ButtonSizeTypes, ButtonStyleTypes, IButton } from './types';
import ButtonInner from './ButtonInner';
import {StylesConfig} from "../../../config";

function Button({
  children,
  size = ButtonSizeTypes.XLarge,
  importance = ButtonImportanceTypes.Primary,
  style = ButtonStyleTypes.High,
  leftIcon,
  rightIcon,
  centerIcon,
  imgLogo,
  disabled,
  title,
  tabIndex = 0,
  ariaLabel,
  onClick,
  isActive,
  className,
  debounceInterval = 0,
  sizes,
}: IButton) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const skin = StylesConfig[importance];
  const styles = useStyles({
    skin,
    size: sizes?.[size] || buttonSizes[size],
    centerIcon,
    leftIcon,
    rightIcon,
    hasContent: !!children,
    isButton: true,
    debounceInterval,
  } as any);

  const handleClick = () => {
    if (debounceInterval) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, debounceInterval);
      setTimeout(() => {
        onClick();
      }, 0);
    } else {
      onClick();
    }
  };

  return (
    <button
      className={classNames(
        styles.root,
        styles[style],
        { disabled: disabled || (debounceInterval && isClicked), active: isActive },
        className,
      )}
      type="button"
      disabled={disabled}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      onClick={handleClick}
      title={title}
    >
      {isClicked && <i className={classNames(styles.waitIcon, 'ic-spinner6')} />}
      <ButtonInner
        styles={styles}
        leftIcon={leftIcon}
        centerIcon={isClicked ? '' : centerIcon}
        rightIcon={rightIcon}
        imgLogo={imgLogo}
      >
        {children}
      </ButtonInner>
    </button>
  );
}

export default memo(Button);

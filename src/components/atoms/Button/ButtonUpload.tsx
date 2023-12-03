import classNames from 'classnames';
import { StylesConfig } from '../../../config';

import useStyles, { buttonSizes } from './styles';
import { IButtonUpload, ButtonSizeTypes, ButtonStyleTypes, ButtonImportanceTypes } from './types';
import ButtonInner from './ButtonInner';

function ButtonUpload({
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
  ariaLabel = '',
  accept,
  multiple,
  onClick,
  onChange,
}: IButtonUpload) {
  const skin = StylesConfig[importance];
  const styles = useStyles({
    skin,
    size: buttonSizes[size],
    centerIcon,
    leftIcon,
    rightIcon,
    hasContent: !!children,
    isUploadButton: onChange,
    isButton: true,
  } as any);

  return (
    <label
      className={classNames(styles.root, styles[style], { disabled })}
      title={title}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      onClick={onClick}
    >
      <input
        className={styles.control}
        type="file"
        onChange={onChange}
        accept={accept}
        multiple={multiple}
      />
      <ButtonInner
        styles={styles}
        leftIcon={leftIcon}
        centerIcon={centerIcon}
        rightIcon={rightIcon}
      >
        {children}
      </ButtonInner>
    </label>
  );
}

export default ButtonUpload;

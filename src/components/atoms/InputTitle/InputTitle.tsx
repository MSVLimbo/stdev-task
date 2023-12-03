import classNames from 'classnames';

import useStyles from './styles';
import IInputTitle, { InputSizes, InputTitleSizeTypes, InputTitleStyleTypes } from './types';
import InfoMessage from '../InfoMessage';

function InputTitle({
  title,
  isRequired,
  size = InputTitleSizeTypes.XLarge,
  style = InputTitleStyleTypes.Default,
  className,
  infoMessage,
}: IInputTitle) {
  const styles = useStyles({ size: InputSizes[size] } as any);

  return (
    <strong
      className={classNames(styles.root, className, {
        [styles.hasInfo]: infoMessage,
        [styles[InputTitleStyleTypes.Default]]:style ===InputTitleStyleTypes.Default,
        [styles[InputTitleStyleTypes.Disabled]]:style ===InputTitleStyleTypes.Disabled
      })}
    >
      {title}
      {isRequired && <span className={styles.required}>*</span>}
      {infoMessage && <InfoMessage value={infoMessage} />}
    </strong>
  );
}

export default InputTitle;

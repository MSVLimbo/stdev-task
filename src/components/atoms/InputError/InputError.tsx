import classNames from 'classnames';

import useStyles from './styles';
import IInputError from './types';

function InputError({ message, className, hasInfo = true }: IInputError) {
  const styles = useStyles();

  return (
    <span className={classNames(styles.root, className)}>
      {hasInfo && <i className={classNames(styles.icon, 'ic-info')} />}
      {message || ''}
    </span>
  );
}

export default InputError;

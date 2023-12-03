import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import IInputHolder from './types';

const InputHolder = forwardRef(
  ({ input, dropDown, style }: IInputHolder, ref: ForwardedRef<HTMLDivElement>) => {
    const styles = useStyles();

    return (
      <div className={classNames(styles.root, style)} ref={ref}>
        {input}
        {dropDown}
      </div>
    );
  },
);

export default InputHolder;

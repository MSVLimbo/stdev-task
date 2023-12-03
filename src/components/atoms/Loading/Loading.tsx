import classNames from 'classnames';
import useStyles from './styles';
import ILoading, { LoadingSizes } from './types';

// eslint-disable-next-line no-empty-pattern
function Loading({ isLocal = false, zIndex = 1, size = LoadingSizes.Large }: ILoading) {
  const styles = useStyles({ zIndex } as any);

  return (
    <div
      className={classNames(styles.root, styles[size], {
        [styles.local]: isLocal,
        [styles.fullscreen]: !isLocal,
      })}
    >
      <div className={styles.loader}>
        <i className={styles.slice} />
        <i className={styles.slice} />
        <i className={styles.slice} />
        <i className={styles.slice} />
        <i className={styles.slice} />
      </div>
    </div>
  );
}

export default Loading;

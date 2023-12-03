import { useState, useRef } from 'react';
import classNames from 'classnames';
import useStyles, { profileAvatarSize } from './styles';
import IProfileAvatar, { ProfileAvatarSizeTypes } from './types';

function Avatar({
  size = ProfileAvatarSizeTypes.Medium,
  avatarSrc,
  title,
  tabIndex = 0,
  ariaLabel,
  onClick,
}: IProfileAvatar) {
  const ref = useRef() as any;

  const styles = useStyles({ sizes: profileAvatarSize[size] } as any);
  const [isImgHidden, setImgHidden] = useState(false);
  const split = title.split(' ');
  const abbr = split.length > 1 ? `${split[0][0]}${split[1][0]}` : `${split[0][0]}`;

  return (
    <div ref={ref} className={styles.root}>
      <button
        className={classNames(styles.button)}
        type="button"
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {avatarSrc && (
          <img
            className={isImgHidden ? styles.imageHide : styles.avatarImage}
            src={avatarSrc}
            alt={`${title}'s avatar`}
            onError={() => setImgHidden(true)}
          />
        )}
        {abbr}
      </button>
    </div>
  );
}

export default Avatar;

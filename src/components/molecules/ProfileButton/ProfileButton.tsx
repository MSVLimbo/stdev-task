import { useState, useRef, useCallback, useEffect } from 'react';
import classNames from 'classnames';

import useClickOutside from '../../../hooks/useOutsideClick';


import useStyles, { profileButtonSizes } from './styles';
import IProfileButton, { ProfileButtonSizeTypes } from './types';

function ProfileButton({
  size = ProfileButtonSizeTypes.Medium,
  title,
  tabIndex = 0,
  ariaLabel,
  onClick,
  profileInfo,
}: IProfileButton) {
  const ref = useRef() as any;

  const styles = useStyles({ sizes: profileButtonSizes[size] } as any);
  const [isImgHidden, setImgHidden] = useState(false);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    isActive && document.body.classList.add('active');
    return () => {
      document.body.classList.remove('active');
    };
  }, [isActive]);

  const toggleIsActive = useCallback(() => {
    setIsActive(!isActive);
    onClick();
  }, [isActive, onClick]);

  const split = title.split(' ');
  const abbr = `${split[0][0]}${split[1][0]}`;

  useClickOutside(ref, () => setIsActive(false));

  return (
    <div ref={ref} className={styles.root}>
      <button
        className={classNames(styles.button, {
          [styles.default]: !isActive,
          [styles.active]: isActive,
        })}
        type="button"
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        onClick={toggleIsActive}
      >
        {profileInfo?.image && (
          <img
            className={isImgHidden ? styles.imageHide : styles.avatarImage}
            src={profileInfo.image}
            alt={`${title}'s avatar`}
            onError={() => setImgHidden(true)}
          />
        )}
        {abbr}
      </button>
    </div>
  );
}

export default ProfileButton;

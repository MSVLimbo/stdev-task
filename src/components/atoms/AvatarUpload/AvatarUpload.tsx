import classNames from 'classnames';
import { KeyboardEventHandler, useRef, useState } from 'react';
import useStyles from './styles';
import IAvatarUpload from './types';

function AvatarUpload({
  firstName,
  lastName,
  imageSrc,
  tabIndex = 0,
  ariaLabel,
  onChange,
  avatar,
}: IAvatarUpload) {
  const styles = useStyles();

  const controlRef = useRef<HTMLInputElement>(null);
  const [isImgHidden, setImgHidden] = useState(false);
  const keyPressed: KeyboardEventHandler<HTMLElement> = (e: any) => {
    e.preventDefault();
    if (e.code === 'Space' || e.code === 'Enter') {
      controlRef.current?.click();
    }
  };
  const abbr = (firstName && lastName) && `${firstName[0]}${lastName[0]}`;

  return (
    <div className={styles.root}>
      <label
        className={styles.label}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        onKeyPress={keyPressed}
      >
        <input
          className={styles.control}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          id="avatarInput"
          ref={controlRef}
          onChange={e => onChange(e)}
          aria-hidden
        />
        {abbr && <span className={styles.abbr}>{abbr}</span>}

        {imageSrc && !avatar && (
          <img
            className={isImgHidden ? styles.imageHide : styles.image}
            src={imageSrc}
            onError={() => setImgHidden(true)}
            alt={''}
          />
        )}
        <img className={avatar ? styles.image : styles.imageHide} src="#" id="avatarImg" alt={''} />

        <i className={classNames(styles.overlay, 'ic-user-plus')} />
      </label>
    </div>
  );
}

export default AvatarUpload;

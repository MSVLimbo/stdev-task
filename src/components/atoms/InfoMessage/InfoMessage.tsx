import classNames from 'classnames';
import { useState } from 'react';

import useStyles from './styles';
import IInfoMessage from './types';

function InfoMessage({ value, classname }: IInfoMessage) {
  const styles = useStyles();

  const [messageIsVisible, setMessageIsVisible] = useState<boolean>(false);
  const handleVisibility = (state: boolean) => setMessageIsVisible(state);

  const isMobile = sessionStorage.getItem('isMobile') === 'true';

  return (
    <span className={classNames(styles.root, !isMobile && styles.isHovered, classname)}>
      <i
        className={classNames(styles.icon, 'ic-info')}
        onFocus={() => handleVisibility(true)}
        onBlur={() => handleVisibility(false)}
        onMouseOver={() => handleVisibility(true)}
        onMouseOut={() => handleVisibility(false)}
        onClick={() => isMobile && handleVisibility(!messageIsVisible)}
      />
      {messageIsVisible && (
        <span className={classNames(styles.text, isMobile && messageIsVisible && styles.visible)}>
          {value}
        </span>
      )}
    </span>
  );
}

export default InfoMessage;

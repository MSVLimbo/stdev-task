import { ProductConfig } from '../../../config';

import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import useStyles from './styles';
import IPopupHead from './types';

function PopupHead({ title, hideLogo, className }: IPopupHead) {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.root, className)}>
      {!hideLogo && (
        <div className={styles.logoHolder}>
          <img
            className={styles.logo}
            src={'/logo.svg'}
            alt={`${t(ProductConfig.partnerAlias)} logo`}
          />
        </div>
      )}
      <strong className={styles.title}>{title}</strong>
    </div>
  );
}

export default PopupHead;

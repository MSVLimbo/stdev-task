import { useTranslation } from 'react-i18next';
import useStyles from './styles.ts';
import Link from "../../atoms/Link";

function PageNotFound() {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <img className={styles.logo} src={'/logo.svg'} alt={'logo'} />
        <div className={styles.heading}>{`${t('404-page-not-found.title')}`}</div>
        <div className={styles.text}>{`${t('404-page-not-found.content')}`}</div>
        <Link
          href="/"
          className={styles.button}
          id="go-home-page"
        >
          {`${t('404-page-not-found.button.go-to-home')}`}
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;

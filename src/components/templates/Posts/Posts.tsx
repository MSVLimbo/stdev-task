import useStyles from './styles.ts';
import Header from "../../organisms/Header";
import {Outlet} from "react-router-dom";

function Posts() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Posts;

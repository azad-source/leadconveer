import cx from 'clsx';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss';

interface IProps extends React.PropsWithChildren {
  className?: string;
}

export const Layout: React.FC<IProps> = ({ className, children }) => {
  return (
    <div className={cx(styles.root, className)}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

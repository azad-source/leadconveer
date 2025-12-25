import cx from 'clsx';

import styles from './Header.module.scss';

interface IProps {
  className?: string;
}

export const Header: React.FC<IProps> = ({ className }) => {
  return <div className={cx(styles.root, className)}>Header</div>;
};

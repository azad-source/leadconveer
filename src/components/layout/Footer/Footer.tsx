import cx from 'clsx';

import styles from './Footer.module.scss';

interface IProps {
  className?: string;
}

export const Footer: React.FC<IProps> = ({ className }) => {
  return <div className={cx(styles.root, className)}>Footer</div>;
};

import cx from 'clsx';
import type { SizeProp } from 'types/size.types';

import styles from './Button.module.scss';

type ButtonUse = 'primary' | 'default';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SizeProp;
  width?: number | string;
  use?: ButtonUse;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<IProps> = ({
  use = 'default',
  size = 'medium',
  width,
  className,
  children,
  ...props
}) => {
  const rootStyles = {
    width,
  };

  return (
    <button
      className={cx(styles.root, styles[use], styles[size], className)}
      style={rootStyles}
      {...props}
    >
      {children}
    </button>
  );
};

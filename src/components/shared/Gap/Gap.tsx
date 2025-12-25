import cx from 'clsx';
import React from 'react';

import styles from './Gap.module.scss';

type FlexStyleProps = Pick<
  React.CSSProperties,
  | 'display'
  | 'flexDirection'
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'flex'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexBasis'
  | 'gap'
>;

interface IProps extends FlexStyleProps {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  marginTop?: number;
  marginBottom?: number;
  className?: string;
  'data-tid'?: string;
  growChildren?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const Gap = ({
  children,
  className,
  width,
  height,
  onClick,
  'data-tid': dataTid,
  growChildren = false,
  ...props
}: IProps) => {
  const wrapperStyles: React.CSSProperties = {
    ...props,
    gap: props.gap !== undefined ? props.gap : 8,
    width,
    height,
  };

  return (
    <div
      className={cx(styles.root, growChildren && styles.growChildren, className)}
      style={wrapperStyles}
      onClick={onClick}
      data-tid={dataTid}
    >
      {children}
    </div>
  );
};

interface IEndProps {
  leftGap?: React.CSSProperties['marginLeft'];
  children: React.ReactNode;
}

Gap.End = ({ leftGap, children }: IEndProps) => {
  return (
    <div className={styles.flexEnd} style={{ paddingLeft: leftGap }}>
      {children}
    </div>
  );
};

export { Gap };

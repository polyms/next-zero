/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  children: ReactNode,
  className?: string,
  style?: Object,
};

export const TableContainer = (props: Props) => {
  const { children, className, style, ...restProps } = props;

  return (
    <div
      className={classNames('table-responsive dx-g-bs4-table-container', className)}
      style={{
        msOverflowStyle: 'auto',
        ...style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

TableContainer.defaultProps = {
  className: undefined,
  style: null,
};

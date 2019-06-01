/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  className?: string,
  children?: ReactNode,
};

export const TableTreeContent = (props: Props) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={classNames('w-100 dx-g-bs4-table-tree-content', className)} {...restProps}>
      {children}
    </div>
  );
};

TableTreeContent.defaultProps = {
  className: undefined,
  children: undefined,
};

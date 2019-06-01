/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  children?: ReactNode,
  className?: string,
};

export const Title = (props: Props) => {
  const { children, className, ...restProps } = props;

  return (
    <span className={classNames('dx-rg-bs4-table-header-title', className)} {...restProps}>
      {children}
    </span>
  );
};

Title.defaultProps = {
  className: null,
  children: undefined,
};

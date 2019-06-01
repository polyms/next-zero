// @flow
import { type ReactNode } from 'react';
import classNames from 'classnames';

export const Container = ({ children, className, ...restProps }: Props) => (
  <div className={classNames('py-2', className)} {...restProps}>
    {children}
  </div>
);

Container.defaultProps = {
  className: undefined,
};

type Props = {
  children: ReactNode,
  className?: string,
};

/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  children?: ReactNode,
  className?: string,
};

export const GroupPanelContainer = (props: Props) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={classNames('w-100 mt-1', className)} {...restProps}>
      {children}
    </div>
  );
};

GroupPanelContainer.defaultProps = {
  children: null,
  className: undefined,
};

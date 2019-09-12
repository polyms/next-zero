/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  children: ReactNode,
  className?: string,
  style?: Object,
};

export const Toolbar = (props: Props) => {
  const { children, className, style, ...restProps } = props;

  return (
    <div
      className={classNames('card-header border-bottom-0 py-2 d-flex position-relative dx-g-bs4-toolbar', className)}
      style={style}
      {...restProps}
    >
      {children}
    </div>
  );
};

Toolbar.defaultProps = {
  className: undefined,
  style: null,
};

/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  column?: Object,
  children?: ReactNode,
  align?: string,
  className?: string,
};

export const Content = (props: Props) => {
  const { column, children, align, className, ...restProps } = props;

  return (
    <div
      className={classNames(
        {
          'dx-g-bs4-header-cell-content w-100 d-flex flex-row align-items-end': true,
          'justify-content-center': align === 'center',
          'justify-content-end': align === 'right',
        },
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

Content.defaultProps = {
  column: undefined,
  align: 'left',
  className: null,
  children: undefined,
};

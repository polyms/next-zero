/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  value?: number,
  type: string,
  getMessage: Function,
  className?: string,
  children?: ReactNode,
};

export const TableSummaryItem = (props: Props) => {
  const { children, type, value, getMessage, className, ...restProps } = props;

  return (
    <div className={classNames('dx-g-bs4-table-summary-item', className)} {...restProps}>
      {
        <>
          {getMessage(type)}
          :&nbsp;&nbsp;
          {children}
        </>
      }
    </div>
  );
};

TableSummaryItem.defaultProps = {
  value: null,
  className: undefined,
  children: undefined,
};

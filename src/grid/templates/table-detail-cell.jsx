/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  style?: Object,
  colSpan?: number,
  children?: ReactNode,
  className?: string,
  tableColumn?: Object,
  tableRow?: Object,
  row?: any,
};

export const TableDetailCell = (props: Props) => {
  const { colSpan, children, className, tableColumn, tableRow, row, ...restProps } = props;

  return (
    <td colSpan={colSpan} className={classNames('table-active', className)} {...restProps}>
      {children}
    </td>
  );
};

TableDetailCell.defaultProps = {
  style: null,
  colSpan: 1,
  className: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  children: undefined,
};

/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  value?: any,
  column?: Object,
  row?: any,
  children?: ReactNode,
  tableRow?: Object,
  tableColumn?: Object,
  className?: string,
};

export const TableCell = (props: Props) => {
  const { column, value, children, tableRow, tableColumn, row, className, ...restProps } = props;

  return (
    <td
      className={classNames(
        {
          'dx-g-bs4-table-cell': true,
          'text-nowrap': !(tableColumn && tableColumn.wordWrapEnabled),
          'text-right': tableColumn && tableColumn.align === 'right',
          'text-center': tableColumn && tableColumn.align === 'center',
        },
        className
      )}
      {...restProps}
    >
      {children || value}
    </td>
  );
};

TableCell.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined,
};

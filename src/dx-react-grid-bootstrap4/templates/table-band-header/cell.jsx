/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  column?: Object,
  row?: any,
  children?: ReactNode,
  tableRow?: Object,
  tableColumn?: Object,
  className?: string,
  beforeBorder?: boolean,
};

export const Cell = (props: Props) => {
  const { column, children, beforeBorder, tableRow, tableColumn, row, className, ...restProps } = props;

  return (
    <th
      className={classNames(
        {
          'dx-g-bs4-banded-cell dx-g-bs4-table-cell text-nowrap border-right': true,
          'border-left': beforeBorder,
        },
        className
      )}
      {...restProps}
    >
      {children}
    </th>
  );
};

Cell.defaultProps = {
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined,
  beforeBorder: false,
};

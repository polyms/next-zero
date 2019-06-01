/* @flow */
import { type ReactNode } from 'react';

export type Props = {
  children?: ReactNode,
  row?: any,
  tableRow?: Object,
};

export const TableRow = (props: Props) => {
  const { children, row, tableRow, ...restProps } = props;

  return <tr {...restProps}>{children}</tr>;
};

TableRow.defaultProps = {
  children: null,
  row: undefined,
  tableRow: undefined,
};

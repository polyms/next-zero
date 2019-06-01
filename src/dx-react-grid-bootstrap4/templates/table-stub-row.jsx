/* @flow */
import { type ReactNode } from 'react';

export type Props = {
  children?: ReactNode,
  tableRow?: Object,
};

export const TableStubRow = (props: Props) => {
  const { children, tableRow, ...restProps } = props;

  return <tr {...restProps}>{children}</tr>;
};

TableStubRow.defaultProps = {
  children: null,
  tableRow: undefined,
};

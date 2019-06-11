/* @flow */
import { type ReactNode } from 'react';

export type Props = {
  filter?: Object,
  onFilter?: Function,
  children?: ReactNode,
  column?: Object,
  tableRow?: Object,
  tableColumn?: Object,
  getMessage?: Function,
  filteringEnabled?: boolean,
};

export const TableFilterCell = (props: Props) => {
  const {
    filter,
    onFilter,
    children,
    column,
    tableRow,
    tableColumn,
    getMessage,
    filteringEnabled,
    ...restProps
  } = props;

  return (
    <th {...restProps}>
      <div className="input-group">{children}</div>
    </th>
  );
};

TableFilterCell.defaultProps = {
  filter: null,
  onFilter: () => {},
  children: undefined,
  column: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  getMessage: undefined,
  filteringEnabled: true,
};

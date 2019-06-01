/* @flow */
import classNames from 'classnames';

import { SelectionControl } from './parts/selection-control';

export type Props = {
  className?: string,
  selected?: boolean,
  onToggle?: Function,
  row?: any,
  tableRow?: Object,
  tableColumn?: Object,
};

export const TableSelectCell = (props: Props) => {
  const { className, selected, onToggle, row, tableRow, tableColumn, ...restProps } = props;

  return (
    <td className={classNames('text-center align-middle', className)} {...restProps}>
      <SelectionControl checked={selected} onChange={onToggle} />
    </td>
  );
};

TableSelectCell.defaultProps = {
  className: undefined,
  selected: false,
  onToggle: () => {},
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

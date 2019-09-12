/* @flow */
import classNames from 'classnames';

import { SelectionControl } from './parts/selection-control';

export type Props = {
  className?: string,
  allSelected?: boolean,
  someSelected?: boolean,
  disabled?: boolean,
  onToggle?: Function,
  tableRow?: Object,
  tableColumn?: Object,
  rowSpan?: number,
};

export const TableSelectAllCell = (props: Props) => {
  const {
    className,
    allSelected,
    someSelected,
    disabled,
    onToggle,
    tableColumn,
    tableRow,
    rowSpan,
    ...restProps
  } = props;

  return (
    <th
      className={classNames(
        {
          'text-center border-bottom': true,
          'align-middle': !rowSpan,
          'align-bottom': !!rowSpan,
        },
        className
      )}
      rowSpan={rowSpan}
      {...restProps}
    >
      <SelectionControl disabled={disabled} checked={allSelected} indeterminate={someSelected} onChange={onToggle} />
    </th>
  );
};

TableSelectAllCell.defaultProps = {
  className: undefined,
  allSelected: false,
  someSelected: false,
  disabled: false,
  onToggle: () => {},
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined,
};

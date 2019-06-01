/* @flow */
import classNames from 'classnames';

import { ExpandButton } from './parts/expand-button';

export type Props = {
  className?: string,
  expanded?: boolean,
  onToggle?: Function,
  tableColumn?: Object,
  tableRow?: Object,
  row?: any,
};

export const TableDetailToggleCell = (props: Props) => {
  const { expanded, onToggle, tableColumn, tableRow, row, className, ...restProps } = props;

  return (
    <td className={classNames('text-center align-middle border-bottom', className)} {...restProps}>
      <ExpandButton expanded={expanded} onToggle={onToggle} />
    </td>
  );
};

TableDetailToggleCell.defaultProps = {
  className: undefined,
  expanded: false,
  onToggle: () => {},
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
};

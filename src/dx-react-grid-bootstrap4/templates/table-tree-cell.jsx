/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  column?: Object,
  row?: any,
  children?: ReactNode,
  tableRow?: Object,
  tableColumn?: Object,
  style?: Object,
};

export const TableTreeCell = (props: Props) => {
  const { column, children, tableRow, tableColumn, row, ...restProps } = props;

  return (
    <td {...restProps}>
      <div
        className={classNames({
          'd-flex flex-direction-row align-items-center': true,
          'text-nowrap': !(tableColumn && tableColumn.wordWrapEnabled),
          'text-right': tableColumn && tableColumn.align === 'right',
          'text-center': tableColumn && tableColumn.align === 'center',
        })}
      >
        {children}
      </div>
    </td>
  );
};

TableTreeCell.defaultProps = {
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  style: null,
};

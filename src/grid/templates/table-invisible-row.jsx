/* @flow */
import classNames from 'classnames';
import { TableRow } from './table-row';

export type Props = { className?: string };

export const TableInvisibleRow = (props: Props) => {
  const { className, ...restParams } = props;

  return <TableRow className={classNames('dx-g-bs4-table-invisible-row', className)} {...restParams} />;
};

TableInvisibleRow.defaultProps = {
  className: undefined,
};

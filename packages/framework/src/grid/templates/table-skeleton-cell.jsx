/* @flow */
import classNames from 'classnames';

export type Props = {
  className?: string,
  tableRow?: Object,
  tableColumn?: Object,
};

export const TableSkeletonCell = (props: Props) => {
  const { className, tableRow, tableColumn, ...restProps } = props;

  return <td className={classNames('dx-g-bs4-skeleton-cell', className)} {...restProps} />;
};

TableSkeletonCell.defaultProps = {
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

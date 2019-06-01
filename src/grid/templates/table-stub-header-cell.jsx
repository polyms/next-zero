/* @flow */
import classNames from 'classnames';

export type Props = {
  className?: string,
  tableRow?: Object,
  tableColumn?: Object,
};

export const TableStubHeaderCell = (props: Props) => {
  const { className, tableRow, tableColumn, ...restProps } = props;
  return <th className={classNames('p-0 border-bottom', className)} {...restProps} />;
};

TableStubHeaderCell.defaultProps = {
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

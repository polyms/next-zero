/* @flow */
import classNames from 'classnames';

export type Props = {
  className?: string,
  tableRow?: Object,
  tableColumn?: Object,
};

export const TableStubCell = (props: Props) => {
  const { className, tableRow, tableColumn, ...restProps } = props;

  return <td className={classNames('p-0', className)} {...restProps} />;
};

TableStubCell.defaultProps = {
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

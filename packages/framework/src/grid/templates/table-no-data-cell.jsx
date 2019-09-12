/* @flow */
import classNames from 'classnames';

export type Props = {
  colSpan?: number,
  getMessage: Function,
  tableRow?: Object,
  tableColumn?: Object,
  className?: string,
};

export const TableNoDataCell = (props: Props) => {
  const { className, colSpan, getMessage, tableRow, tableColumn, ...restProps } = props;

  return (
    <td className={classNames('py-5', className)} colSpan={colSpan} {...restProps}>
      <div className="dx-g-bs4-fixed-block">
        <big className="text-muted">{getMessage('noData')}</big>
      </div>
    </td>
  );
};

TableNoDataCell.defaultProps = {
  className: undefined,
  colSpan: 1,
  tableRow: undefined,
  tableColumn: undefined,
};

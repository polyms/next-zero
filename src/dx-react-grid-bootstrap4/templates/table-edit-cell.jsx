/* @flow */
import classNames from 'classnames';

export type Props = {
  column?: Object,
  row?: any,
  tableColumn?: Object,
  tableRow?: Object,
  value?: any,
  onValueChange: Function,
  className?: string,
  editingEnabled?: boolean,
  children?: number | string | React.Element | Array<any>,
};

export const EditCell = (props: Props) => {
  const {
    column,
    value,
    onValueChange,
    className,
    children,
    row,
    tableRow,
    tableColumn,
    editingEnabled,
    ...restProps
  } = props;

  return (
    <td className={classNames('align-middle dx-g-bs4-table-edit-cell', className)} {...restProps}>
      {children || (
        <input
          type="text"
          className={classNames({
            'form-control w-100': true,
            'text-right': tableColumn && tableColumn.align === 'right',
            'text-center': tableColumn && tableColumn.align === 'center',
          })}
          readOnly={!editingEnabled}
          value={value}
          onChange={e => onValueChange(e.target.value)}
        />
      )}
    </td>
  );
};
EditCell.defaultProps = {
  column: undefined,
  row: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  className: undefined,
  children: undefined,
  editingEnabled: true,
  value: '',
};

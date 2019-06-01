/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type Props = {
  contentComponent: Function,
  iconComponent: Function,
  className?: string,
  colSpan?: number,
  row?: any,
  column?: Object,
  expanded?: boolean,
  onToggle?: Function,
  children?: ReactNode,
  tableRow?: Object,
  tableColumn?: Object,
};

export const Cell = (props: Props) => {
  const {
    className,
    colSpan,
    row,
    column,
    expanded,
    onToggle,
    children,
    tableRow,
    tableColumn,
    iconComponent: Icon,
    contentComponent: Content,
    ...restProps
  } = props;

  const handleClick = () => onToggle();

  return (
    <td
      colSpan={colSpan}
      className={classNames('dx-g-bs4-cursor-pointer', className)}
      onClick={handleClick}
      {...restProps}
    >
      <Icon expanded={expanded} onToggle={onToggle} className="mr-2" />
      <Content column={column} row={row}>
        {children}
      </Content>
    </td>
  );
};

Cell.defaultProps = {
  className: undefined,
  colSpan: 1,
  row: {},
  column: {},
  expanded: false,
  onToggle: () => {},
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

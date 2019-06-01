/* @flow */
import { type ReactNode } from 'react';
import classNames from 'classnames';

export type CommandButtonProps = {
  text: string,
  onExecute: Function,
  className?: string,
};

export const CommandButton = (props: CommandButtonProps) => {
  const { onExecute, text, className, ...restProps } = props;

  return (
    <button
      type="button"
      className={classNames('btn btn-link dx-g-bs4-table-edit-command-cell', className)}
      onClick={e => {
        e.stopPropagation();
        onExecute();
      }}
      {...restProps}
    >
      {text}
    </button>
  );
};

CommandButton.defaultProps = {
  className: undefined,
};

export type EditCommandHeadingCellProps = {
  children?: ReactNode,
  tableColumn?: Object,
  tableRow?: Object,
  className?: string,
};

export const EditCommandHeadingCell = (props: EditCommandHeadingCellProps) => {
  const { children, className, tableColumn, tableRow, ...restProps } = props;

  return (
    <th className={classNames('text-center p-0 text-nowrap', className)} {...restProps}>
      {children}
    </th>
  );
};

EditCommandHeadingCell.defaultProps = {
  children: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  className: undefined,
};

export type EditCommandCellProps = {
  children?: ReactNode,
  tableColumn?: Object,
  tableRow?: Object,
  row?: any,
  className?: string,
};

export const EditCommandCell = (props: EditCommandCellProps) => {
  const { tableColumn, tableRow, row, children, className, ...restProps } = props;

  return (
    <td className={classNames('text-center p-0 text-nowrap', className)} {...restProps}>
      {children}
    </td>
  );
};

EditCommandCell.defaultProps = {
  children: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  className: undefined,
};

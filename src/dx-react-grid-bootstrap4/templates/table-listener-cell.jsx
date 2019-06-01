/* @flow */
import { Sizer } from '@devexpress/dx-react-core';
import classNames from 'classnames';
import { TableStubCell } from './table-stub-cell';

export type TableBorderlessStubCellProps = { className?: string };

const TableBorderlessStubCell = (props: TableBorderlessStubCellProps) => {
  const { className, ...restProps } = props;

  return <TableStubCell className={classNames('border-0', className)} {...restProps} />;
};

TableBorderlessStubCell.defaultProps = {
  className: undefined,
};

export type TableListenerCellProps = {
  listen: boolean,
  onSizeChange: Function,
};

export const TableListenerCell = (props: TableListenerCellProps) => {
  const { listen, onSizeChange, ...restProps } = props;

  return listen ? (
    <Sizer containerComponent={TableBorderlessStubCell} onSizeChange={onSizeChange} {...restProps} />
  ) : (
    <TableBorderlessStubCell {...restProps} />
  );
};

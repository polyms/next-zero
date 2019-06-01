/* @flow */
import { type ReactNode } from 'react';

export type Props = {
  row?: any,
  column?: Object,
  children?: ReactNode,
};

export const Content = (props: Props) => {
  const { column, row, children, ...restProps } = props;

  return (
    <span {...restProps}>
      <strong>{column.title || column.name}: </strong>
      {children || String(row.value)}
    </span>
  );
};

Content.defaultProps = {
  row: {},
  column: {},
  children: undefined,
};

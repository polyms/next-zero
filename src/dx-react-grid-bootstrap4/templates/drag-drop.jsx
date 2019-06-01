// @flow
import { type ReactNode } from 'react';
import classNames from 'classnames';

export const Container = ({ clientOffset, style, className, children, ...restProps }: Props) => (
  <ul
    className={classNames('list-group d-inline-block position-fixed dx-g-bs4-drag-drop', className)}
    style={{
      transform: `translate(calc(${clientOffset.x}px - 50%), calc(${clientOffset.y}px - 50%))`,
      zIndex: 1000,
      left: 0,
      top: 0,
      ...style,
    }}
    {...restProps}
  >
    {children}
  </ul>
);

type Props = {
  clientOffset: {
    x: number,
    y: number,
  },
  style?: object,
  className?: string,
  children?: ReactNode,
};

Container.defaultProps = {
  style: {},
  className: undefined,
  children: undefined,
};

export const Column = ({ column, className, ...restProps }: ColumnProps) => (
  <li className={classNames('list-group-item', className)} {...restProps}>
    {column.title}
  </li>
);

Column.defaultProps = {
  className: undefined,
};

type ColumnProps = {
  column: object,
  className?: string,
};

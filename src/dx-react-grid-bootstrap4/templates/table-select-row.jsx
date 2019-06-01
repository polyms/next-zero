/* @flow */
import { type ReactNode } from 'react';

export type Props = {
  selected?: boolean,
  children?: ReactNode,
  onToggle?: Function,
  selectByRowClick?: boolean,
  style?: Object,
};

export const TableSelectRow = (props: Props) => {
  const { selected, children, style, onToggle, selectByRowClick } = props;

  return (
    <tr
      style={style}
      className={selected ? 'table-active' : ''}
      onClick={e => {
        if (!selectByRowClick) return;
        e.stopPropagation();
        onToggle();
      }}
    >
      {children}
    </tr>
  );
};

TableSelectRow.defaultProps = {
  children: null,
  onToggle: () => {},
  selected: false,
  selectByRowClick: false,
  style: null,
};

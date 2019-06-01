/* @flow */
import React, { type ReactNode } from 'react';
import classNames from 'classnames';
import { DragSource } from '@devexpress/dx-react-core';

import { ResizingControl } from './table-header-cell/resizing-control';

type Props = {
  before?: ReactNode,
  tableColumn?: Object,
  tableRow?: Object,
  column?: Object,
  className?: string,
  showSortingControls?: boolean,
  sortingEnabled?: boolean,
  sortingDirection?: 'asc' | 'desc' | null,
  onSort?: Function,
  showGroupingControls?: boolean,
  onGroup?: Function,
  groupingEnabled?: boolean,
  draggingEnabled?: boolean,
  resizingEnabled?: boolean,
  onWidthChange?: Function,
  onWidthDraft?: Function,
  onWidthDraftCancel?: Function,
  children?: ReactNode,
};

export class TableHeaderCell extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      dragging: false,
    };
    this.cellRef = React.createRef();
  }

  onDragStart = () => {
    this.setState({ dragging: true });
  };

  onDragEnd = () => {
    if (this.cellRef.current) {
      this.setState({ dragging: false });
    }
  };

  render() {
    const {
      className,
      column,
      tableColumn,
      showGroupingControls,
      onGroup,
      groupingEnabled,
      draggingEnabled,
      onWidthDraftCancel,
      resizingEnabled,
      onWidthChange,
      onWidthDraft,
      tableRow,
      children,
      // @deprecated
      showSortingControls,
      sortingDirection,
      sortingEnabled,
      onSort,
      before,
      ...restProps
    } = this.props;
    const { dragging } = this.state;

    const cellLayout = (
      <th
        className={classNames(
          {
            'position-relative dx-g-bs4-header-cell border-bottom': true,
            'dx-g-bs4-user-select-none': draggingEnabled,
            'dx-g-bs4-cursor-pointer': draggingEnabled,
            'dx-g-bs4-inactive': dragging || (tableColumn && tableColumn.draft),
            'text-nowrap': !(tableColumn && tableColumn.wordWrapEnabled),
          },
          className
        )}
        scope="col"
        {...restProps}
      >
        <div className="d-flex flex-direction-row align-items-center">{children}</div>
        {resizingEnabled && (
          <ResizingControl
            onWidthChange={onWidthChange}
            onWidthDraft={onWidthDraft}
            onWidthDraftCancel={onWidthDraftCancel}
          />
        )}
      </th>
    );

    return draggingEnabled ? (
      <DragSource
        ref={this.cellRef}
        payload={[{ type: 'column', columnName: column.name }]}
        onStart={this.onDragStart}
        onEnd={this.onDragEnd}
      >
        {cellLayout}
      </DragSource>
    ) : (
      cellLayout
    );
  }
}

TableHeaderCell.defaultProps = {
  before: undefined,
  column: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  className: undefined,
  showSortingControls: false,
  sortingEnabled: false,
  sortingDirection: undefined,
  onSort: undefined,
  showGroupingControls: false,
  onGroup: undefined,
  groupingEnabled: false,
  draggingEnabled: false,
  resizingEnabled: false,
  onWidthChange: undefined,
  onWidthDraft: undefined,
  onWidthDraftCancel: undefined,
  children: undefined,
};

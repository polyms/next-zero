// @flow
import { PureComponent } from 'react';
import { TableColumnResizing as TableColumnResizingBase } from '@devexpress/dx-react-grid';

export class TableColumnResizing extends PureComponent<Props> {
  render() {
    const { minColumnWidth, ...restProps } = this.props;
    return <TableColumnResizingBase {...restProps} minColumnWidth={minColumnWidth} />;
  }
}

TableColumnResizing.defaultProps = {
  minColumnWidth: 55,
};

type Props = {
  minColumnWidth?: number,
};

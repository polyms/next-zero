/* @flow */
import React, { useState } from 'react';
import {
  Table,
  SortingState,
  SelectionState,
  FilteringState,
  GroupingState,
  SearchState,
  IntegratedFiltering,
  IntegratedGrouping,
  IntegratedSorting,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableFilterRow,
  TableSelection,
  TableGroupRow,
  GroupingPanel,
  DragDropProvider,
  TableColumnReordering,
  Toolbar,
  SearchPanel,
} from '../src/index';

import { ProgressBarCell } from '../src/extensions/progress-bar-cell';
import { HighlightedCell } from '../src/extensions/highlighted-cell';
import { CurrencyTypeProvider } from '../src/extensions/currency-type-provider';
import { PercentTypeProvider } from '../src/extensions/percent-type-provider';
import { BooleanTypeProvider } from '../src/extensions/boolean-type-provider';

import { generateRows, globalSalesValues } from './storybook/generator';

const Cell = (props: Table.DataCellProps) => {
  const { column } = props;
  if (column.name === 'discount') {
    return <ProgressBarCell {...props} />;
  }
  if (column.name === 'amount') {
    return <HighlightedCell {...props} />;
  }
  return <VirtualTable.Cell {...props} />;
};

const getRowId = row => row.id;

export const VirtualScroll = () => {
  const [columns] = useState([
    { name: 'product', title: 'Product' },
    { name: 'region', title: 'Region' },
    { name: 'sector', title: 'Sector' },
    { name: 'channel', title: 'Channel' },
    { name: 'amount', title: 'Sale Amount' },
    { name: 'discount', title: 'Discount' },
    { name: 'saleDate', title: 'Sale Date' },
    { name: 'customer', title: 'Customer' },
    { name: 'units', title: 'Units' },
    { name: 'shipped', title: 'Shipped' },
  ]);
  const [rows] = useState(
    generateRows({
      columnValues: { id: ({ index }) => index, ...globalSalesValues },
      length: 200000,
    })
  );
  const [tableColumnExtensions] = useState([
    { columnName: 'amount', align: 'right' },
    { columnName: 'units', align: 'right' },
  ]);
  const [currencyColumns] = useState(['amount']);
  const [percentColumns] = useState(['discount']);
  const [booleanColumns] = useState(['shipped']);

  return (
    <Grid rows={rows} columns={columns} getRowId={getRowId}>
      <DragDropProvider />

      <FilteringState defaultFilters={[{ columnName: 'saleDate', value: '2016-02' }]} />
      <SearchState />
      <SortingState
        defaultSorting={[{ columnName: 'product', direction: 'asc' }, { columnName: 'saleDate', direction: 'asc' }]}
      />
      <GroupingState defaultGrouping={[{ columnName: 'product' }]} defaultExpandedGroups={['EnviroCare Max']} />
      <SelectionState />

      <IntegratedFiltering />
      <IntegratedSorting />
      <IntegratedGrouping />
      <IntegratedSelection />

      <CurrencyTypeProvider for={currencyColumns} />
      <PercentTypeProvider for={percentColumns} />
      <BooleanTypeProvider for={booleanColumns} />

      <VirtualTable columnExtensions={tableColumnExtensions} cellComponent={Cell} />
      <TableHeaderRow showSortingControls />
      <TableColumnReordering defaultOrder={columns.map(column => column.name)} />
      <TableFilterRow showFilterSelector />
      <TableSelection showSelectAll />
      <TableGroupRow />
      <Toolbar />
      <SearchPanel />
      <GroupingPanel showSortingControls />
    </Grid>
  );
};

export default { title: 'Demos|Virtual scroll', parameters: { jest: ['group-panel-container'] } };

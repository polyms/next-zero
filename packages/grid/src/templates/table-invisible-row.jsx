import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { TableRow } from './table-row';

export const TableInvisibleRow = ({ className, ...restParams }) => (
  <TableRow className={classNames('dx-g-nz-table-invisible-row', className)} {...restParams} />
);

TableInvisibleRow.propTypes = {
  className: PropTypes.string,
};

TableInvisibleRow.defaultProps = {
  className: undefined,
};
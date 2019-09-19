import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export const TableSkeletonCell = ({ className, tableRow, tableColumn, ...restProps }) => (
  <td className={classNames('dx-g-nz-skeleton-cell', className)} {...restProps} />
);

TableSkeletonCell.propTypes = {
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableSkeletonCell.defaultProps = {
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

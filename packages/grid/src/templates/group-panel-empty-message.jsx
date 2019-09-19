import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export const GroupPanelEmptyMessage = ({ getMessage, className, ...restProps }) => (
  <div className={classNames('dx-g-nz-group-panel-empty-message', className)} {...restProps}>
    {getMessage('groupByColumn')}
  </div>
);

GroupPanelEmptyMessage.propTypes = {
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
};

GroupPanelEmptyMessage.defaultProps = {
  className: undefined,
};

import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export const GroupButton = ({ disabled, onGroup, className, ...restProps }) => (
  <div
    className={classNames(
      {
        'dx-g-nz-grouping-control': true,
      },
      className
    )}
    onClick={e => {
      if (disabled) return;
      e.stopPropagation();
      onGroup();
    }}
    {...restProps}
  >
    <span
      className={classNames({
        'oi oi-list dx-g-nz-grouping-control-icon': true,
        'dx-g-nz-cursor-pointer': !disabled,
        'dx-g-nz-inactive': disabled,
      })}
    />
  </div>
);

GroupButton.propTypes = {
  onGroup: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

GroupButton.defaultProps = {
  disabled: false,
  className: undefined,
};

import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid/v4';

export const SelectionControl = ({ disabled, checked, indeterminate, onChange, className, ...restProps }) => {
  const [key] = useState(uuid());

  return (
    <div className="custom-control custom-checkbox">
      <input
        className={classNames(
          {
            'd-inline-block': true,
            'dx-g-nz-cursor-pointer': !disabled,
            'custom-control-input': true,
          },
          className
        )}
        id={key}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        ref={ref => {
          if (ref) {
            ref.indeterminate = indeterminate; // eslint-disable-line no-param-reassign
          }
        }}
        onChange={() => {
          if (disabled) return;
          onChange();
        }}
        onClick={e => e.stopPropagation()}
        {...restProps}
      />
      {/*  eslint-disable jsx-a11y/label-has-for */}
      {/*  eslint-disable jsx-a11y/label-has-associated-control */}
      <label className="custom-control-label" htmlFor={key}></label>
    </div>
  );
};

SelectionControl.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

SelectionControl.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: () => {},
  className: undefined,
};

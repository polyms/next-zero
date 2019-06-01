/* @flow */
import classNames from 'classnames';
import uuid from 'uuid/v4';

export type Props = {
  disabled?: boolean,
  checked?: boolean,
  indeterminate?: boolean,
  onChange?: Function,
  className?: string,
};

export const SelectionControl = (props: Props) => {
  const { disabled, checked, indeterminate, onChange, className, ...restProps } = props;
  const id = uuid();

  return (
    <div className="custom-control custom-checkbox">
      <input
        id={id}
        className={classNames(
          {
            'custom-control-input': true,
            'd-inline-block': true,
            'dx-g-bs4-cursor-pointer': !disabled,
          },
          className
        )}
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
      {/* eslint-disable-next-line jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */}
      <label className="custom-control-label" htmlFor={id}>
        {' '}
      </label>
    </div>
  );
};

SelectionControl.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: () => {},
  className: undefined,
};

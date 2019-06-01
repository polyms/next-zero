/* @flow */
import classNames from 'classnames';

import { SelectionControl } from './parts/selection-control';

export type Props = {
  className?: string,
  checked?: boolean,
  indeterminate?: boolean,
  disabled?: boolean,
  onChange?: Function,
};

export const TableTreeCheckbox = (props: Props) => {
  const { className, checked, indeterminate, disabled, onChange, ...restProps } = props;

  return (
    <SelectionControl
      disabled={disabled}
      checked={checked}
      indeterminate={indeterminate}
      onChange={onChange}
      className={classNames('mr-4', className)}
      {...restProps}
    />
  );
};

TableTreeCheckbox.defaultProps = {
  className: undefined,
  checked: false,
  indeterminate: false,
  disabled: false,
  onChange: () => {},
};

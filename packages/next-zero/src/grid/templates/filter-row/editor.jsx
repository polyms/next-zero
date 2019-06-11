// @flow
import classNames from 'classnames';

export const Editor = ({ value, disabled, getMessage, onChange, className, ...restProps }: Props) => (
  <input
    type="text"
    className={classNames('form-control', className)}
    value={value}
    onChange={event => onChange(event.target.value)}
    readOnly={disabled}
    placeholder={getMessage('filterPlaceholder')}
    {...restProps}
  />
);

Editor.defaultProps = {
  value: '',
  disabled: false,
  onChange: () => {},
  className: undefined,
};

type Props = {
  value?: any,
  disabled?: boolean,
  onChange?: Function,
  getMessage: Function,
  className?: string,
};

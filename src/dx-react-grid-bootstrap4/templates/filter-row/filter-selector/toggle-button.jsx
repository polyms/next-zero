/* @flow */
import classNames from 'classnames';

export type Props = {
  buttonRef: Function,
  onToggle: Function,
  children?: number | string | React.Element | Array<any>,
  disabled?: boolean,
  className?: string,
};

export const ToggleButton = (props: Props) => {
  const { buttonRef, onToggle, disabled, children, className, ...restProps } = props;

  return (
    <button
      type="button"
      className={classNames('btn btn-outline-secondary', className)}
      disabled={disabled}
      onClick={onToggle}
      ref={buttonRef}
      {...restProps}
    >
      {children}
    </button>
  );
};

ToggleButton.defaultProps = {
  children: undefined,
  className: undefined,
  disabled: false,
};

// @flow
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

export const ToggleButton = ({ onToggle, className, getMessage, buttonRef, active, ...restProps }: Props) => {
  const buttonClasses = classNames(
    {
      btn: true,
      'btn-outline-secondary': true,
      'border-0': true,
      active,
    },
    className
  );
  return (
    <button type="button" className={buttonClasses} onClick={onToggle} ref={buttonRef} {...restProps}>
      <FontAwesomeIcon icon={faEye} />
    </button>
  );
};

ToggleButton.defaultProps = {
  className: undefined,
  active: false,
};

type Props = {
  onToggle: Function,
  getMessage: Function,
  buttonRef: Function,
  className?: string,
  active?: boolean,
};

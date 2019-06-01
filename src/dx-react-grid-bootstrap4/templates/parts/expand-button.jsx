/* @flow */
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ENTER_KEY_CODE = 13;
const SPACE_KEY_CODE = 32;

const handleMouseDown = e => {
  e.target.style.outline = 'none';
};
const handleBlur = e => {
  e.target.style.outline = '';
};

export type Props = {
  visible?: boolean,
  expanded?: boolean,
  onToggle?: Function,
  className?: string,
};

export const ExpandButton = (props: Props) => {
  const { visible, expanded, onToggle, className, ...restProps } = props;
  const fireToggle = () => {
    if (!visible) return;
    onToggle(!expanded);
  };
  const handleClick = e => {
    e.stopPropagation();
    fireToggle();
  };
  const handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY_CODE || e.keyCode === SPACE_KEY_CODE) {
      e.preventDefault();
      fireToggle();
    }
  };
  return (
    <FontAwesomeIcon
      icon={expanded ? faMinus : faPlus}
      className={classNames(
        {
          'p-2 text-center dx-g-bs4-toggle-button': true,
          'dx-g-bs4-toggle-button-hidden': !visible,
        },
        className
      )}
      tabIndex={visible ? 0 : undefined} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      onBlur={handleBlur}
      onClick={handleClick}
      {...restProps}
    />
  );
};

ExpandButton.defaultProps = {
  visible: true,
  expanded: false,
  onToggle: () => {},
  className: undefined,
};

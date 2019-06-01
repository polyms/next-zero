// @flow
import { type SyntheticEvent } from 'react';
import classNames from 'classnames';

const handleMouseDown = e => {
  e.currentTarget.style.outline = 'none';
};
const handleBlur = e => {
  e.currentTarget.style.outline = '';
};

export const Item = ({ item: { column, hidden }, onToggle, className, disabled, ...restProps }: Props) => (
  <button
    className={classNames(
      {
        'dropdown-item dx-g-bs4-column-chooser-item': true,
        'dx-g-bs4-cursor-pointer': !disabled,
      },
      className
    )}
    type="button"
    onClick={onToggle}
    onMouseDown={handleMouseDown}
    onBlur={handleBlur}
    disabled={disabled}
    {...restProps}
  >
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className={classNames({
          'dx-g-bs4-cursor-pointer': !disabled,
          'dx-g-bs4-column-chooser-checkbox': true,
          'custom-control-input': true,
        })}
        tabIndex={-1}
        checked={!hidden}
        disabled={disabled}
        onChange={onToggle}
        onClick={e => e.stopPropagation()}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label className="custom-control-label" htmlFor="customCheck1">
        {column.title || column.name}
      </label>
    </div>
  </button>
);

Item.defaultProps = {
  onToggle: () => {},
  className: undefined,
  disabled: false,
};

type Props = {
  item: {
    column?: { name?: string },
    hidden?: boolean,
  },
  onToggle?: (e: SyntheticEvent<HTMLButtonElement>) => void,
  className?: string,
  disabled?: boolean,
};

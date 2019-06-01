/* @flow */
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';

export type Props = {
  onGroup: Function,
  disabled?: boolean,
  className?: string,
};

export const GroupButton = (props: Props) => {
  const { disabled, onGroup, className, ...restProps } = props;

  return (
    <div
      className={classNames(
        {
          'dx-g-bs4-grouping-control': true,
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
      <FontAwesomeIcon
        icon={faListAlt}
        className={classNames({
          'dx-g-bs4-grouping-control-icon': true,
          'dx-g-bs4-cursor-pointer': !disabled,
          'dx-g-bs4-inactive': disabled,
        })}
      />
    </div>
  );
};

GroupButton.defaultProps = {
  disabled: false,
  className: undefined,
};

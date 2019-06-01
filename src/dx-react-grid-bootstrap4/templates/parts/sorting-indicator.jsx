/* @flow */
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';

export type Props = {
  direction?: 'asc' | 'desc',
  className?: string,
};

export const SortingIndicator = (props: Props) => {
  const { direction, className } = props;

  return (
    <FontAwesomeIcon
      icon={direction === 'asc' ? faSortAlphaDown : faSortAlphaUp}
      className={classNames(
        {
          'mx-2': true,
          invisible: !direction,
        },
        className
      )}
    />
  );
};

SortingIndicator.defaultProps = {
  direction: null,
  className: undefined,
};

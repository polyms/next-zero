import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

export const SortingIndicator = React.memo(({ direction, className }) => (
  <FontAwesomeIcon
    icon={direction === 'desc' ? faLongArrowAltDown : faLongArrowAltUp}
    className={classNames(
      {
        'dx-g-nz-sorting-indicator mx-2': true,
        invisible: !direction,
      },
      className
    )}
  />
));

SortingIndicator.propTypes = {
  direction: PropTypes.oneOf(['asc', 'desc']),
  className: PropTypes.string,
};

SortingIndicator.defaultProps = {
  direction: null,
  className: undefined,
};

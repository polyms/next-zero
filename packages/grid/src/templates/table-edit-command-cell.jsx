import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave, faPlus } from '@fortawesome/free-solid-svg-icons';

const iconButton = {
  Edit: faEdit,
  New: faPlus,
  Delete: faTrash,
  Save: faSave,
  Cancel: faTrash,
};

export const CommandButton = ({ onExecute, text, className, ...restProps }) => (
  <button
    type="button"
    className={classNames('btn btn-link dx-g-nz-table-edit-command-cell', className)}
    onClick={e => {
      e.stopPropagation();
      onExecute();
    }}
    {...restProps}
  >
    <FontAwesomeIcon icon={iconButton[text]} />
  </button>
);

CommandButton.propTypes = {
  text: PropTypes.string.isRequired,
  onExecute: PropTypes.func.isRequired,
  className: PropTypes.string,
};

CommandButton.defaultProps = {
  className: undefined,
};

export const EditCommandHeadingCell = ({ children, className, tableColumn, tableRow, ...restProps }) => (
  <th className={classNames('text-center p-0 text-nowrap', className)} {...restProps}>
    {children}
  </th>
);

EditCommandHeadingCell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  // eslint-disable-next-line react/forbid-prop-types
  tableColumn: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  tableRow: PropTypes.object,
  className: PropTypes.string,
};

EditCommandHeadingCell.defaultProps = {
  children: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  className: undefined,
};

export const EditCommandCell = ({ tableColumn, tableRow, row, children, className, ...restProps }) => (
  <td className={classNames('text-center p-0 text-nowrap', className)} {...restProps}>
    {children}
  </td>
);

EditCommandCell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  // eslint-disable-next-line react/forbid-prop-types
  tableColumn: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  tableRow: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  row: PropTypes.any,
  className: PropTypes.string,
};

EditCommandCell.defaultProps = {
  children: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  className: undefined,
};

// @flow
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SortingIndicator } from './parts/sorting-indicator';

const ENTER_KEY_CODE = 13;
const SPACE_KEY_CODE = 32;

const isActionKey = keyCode => keyCode === ENTER_KEY_CODE || keyCode === SPACE_KEY_CODE;

export const GroupPanelItem = ({
  item: { column, draft },
  onGroup,
  showGroupingControls,
  showSortingControls,
  sortingDirection,
  onSort,
  className,
  groupingEnabled,
  sortingEnabled,
  ...restProps
}: Props) => {
  const handleSortingChange = e => {
    const isActionKeyDown = isActionKey(e.keyCode);
    const isMouseClick = e.keyCode === undefined;

    if (!showSortingControls || !sortingEnabled || !(isActionKeyDown || isMouseClick)) return;

    const cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
    const direction = (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey ? null : undefined;

    e.preventDefault();
    onSort({
      direction,
      keepOther: cancelSortingRelatedKey,
    });
  };
  const handleUngroup = e => {
    if (!groupingEnabled) return;
    const isActionKeyDown = isActionKey(e.keyCode);
    const isMouseClick = e.keyCode === undefined;

    if (!isActionKeyDown && !isMouseClick) return;
    onGroup();
  };
  return (
    <div
      className={classNames(
        {
          'btn-group mb-1 mr-1': true,
          'dx-g-bs4-inactive': draft,
        },
        className
      )}
      {...restProps}
    >
      <button
        type="button"
        className={classNames({
          'btn btn-outline-secondary': true,
          disabled: !sortingEnabled && (showSortingControls || !groupingEnabled),
        })}
        onClick={handleSortingChange}
        onKeyDown={handleSortingChange}
        {...(sortingEnabled ? { tabIndex: 0 } : null)}
      >
        {column.title || column.name}
        {showSortingControls && sortingDirection && (
          <span>
            &nbsp;
            <SortingIndicator direction={sortingDirection} />
          </span>
        )}
      </button>

      {showGroupingControls && (
        <button
          type="button"
          className={classNames({
            'btn btn-outline-secondary': true,
            disabled: !groupingEnabled,
          })}
          onClick={handleUngroup}
        >
          &nbsp;
          <FontAwesomeIcon icon={faTimes} className="dx-g-bs4-group-panel-item-icon" />
        </button>
      )}
    </div>
  );
};

type Props = {
  item: { column: { title?: string }, draft?: boolean },
  showSortingControls?: boolean,
  sortingDirection: 'asc' | 'desc' | null,
  className?: string,
  onSort?: Function,
  onGroup?: Function,
  showGroupingControls?: boolean,
  groupingEnabled?: boolean,
  sortingEnabled?: boolean,
};

GroupPanelItem.defaultProps = {
  showSortingControls: false,
  sortingDirection: undefined,
  className: undefined,
  onSort: undefined,
  onGroup: undefined,
  showGroupingControls: false,
  sortingEnabled: false,
  groupingEnabled: false,
};

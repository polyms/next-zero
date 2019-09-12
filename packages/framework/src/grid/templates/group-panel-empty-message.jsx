/* @flow */
import classNames from 'classnames';

export type Props = {
  getMessage: Function,
  className?: string,
};

export const GroupPanelEmptyMessage = (props: Props) => {
  const { getMessage, className, ...restProps } = props;

  return (
    <div className={classNames('dx-g-bs4-group-panel-empty-message', className)} {...restProps}>
      {getMessage('groupByColumn')}
    </div>
  );
};

GroupPanelEmptyMessage.defaultProps = {
  className: undefined,
};

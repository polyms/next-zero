/* @flow */
import classNames from 'classnames';

import { ExpandButton } from './parts/expand-button';

export type Props = {
  className?: string,
  visible?: boolean,
  expanded?: boolean,
  onToggle?: Function,
};

export const TableTreeExpandButton = (props: Props) => {
  const { className, visible, expanded, onToggle, ...restProps } = props;

  return (
    <ExpandButton
      visible={visible}
      expanded={expanded}
      onToggle={onToggle}
      className={classNames('mr-3', className)}
      {...restProps}
    />
  );
};

TableTreeExpandButton.defaultProps = {
  className: undefined,
  visible: false,
  expanded: false,
  onToggle: () => {},
};

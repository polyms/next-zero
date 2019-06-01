// @flow
import { type ReactNode } from 'react';
import { Popover } from '../../components';

export const Overlay = ({ visible, children, target, onHide, ...restProps }: Props) => {
  const handleToggle = () => {
    if (visible) onHide();
  };
  return target ? (
    <Popover
      placement="bottom"
      isOpen={visible}
      target={target}
      renderInBody={false}
      toggle={handleToggle}
      {...restProps}
    >
      {children}
    </Popover>
  ) : null;
};

Overlay.defaultProps = {
  visible: false,
  target: null,
};

type Props = {
  children: ReactNode,
  onHide: Function,
  visible?: boolean,
  target?: object | Function,
};

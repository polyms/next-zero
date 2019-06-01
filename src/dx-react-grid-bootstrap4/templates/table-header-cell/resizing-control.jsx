/* @flow */
import { PureComponent } from 'react';
import classNames from 'classnames';
import { Draggable } from '@devexpress/dx-react-core';

type Props = {
  onWidthChange: Function,
  onWidthDraft: Function,
  onWidthDraftCancel: Function,
};

export class ResizingControl extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      resizing: false,
    };
  }

  onResizeStart = ({ x }) => {
    this.resizeStartingX = x;
    this.setState({ resizing: true });
  };

  onResizeUpdate = ({ x }) => {
    const { onWidthDraft } = this.props;
    onWidthDraft({ shift: x - this.resizeStartingX });
  };

  onResizeEnd = ({ x }) => {
    const { onWidthChange, onWidthDraftCancel } = this.props;
    onWidthDraftCancel();
    onWidthChange({ shift: x - this.resizeStartingX });
    this.setState({ resizing: false });
  };

  render() {
    const { resizing } = this.state;

    return (
      <Draggable onStart={this.onResizeStart} onUpdate={this.onResizeUpdate} onEnd={this.onResizeEnd}>
        <div
          className={classNames({
            'dx-g-bs4-resizing-control-wrapper': true,
            'dx-g-bs4-resizing-control-wrapper-active': resizing,
          })}
        >
          <div
            className={classNames({
              'dx-g-bs4-resize-control-line dx-g-bs4-resize-control-line-first bg-primary': true,
              'dx-g-bs4-resize-control-line-active': resizing,
            })}
          />
          <div
            className={classNames({
              'dx-g-bs4-resize-control-line dx-g-bs4-resize-control-line-second bg-primary': true,
              'dx-g-bs4-resize-control-line-active': resizing,
            })}
          />
        </div>
      </Draggable>
    );
  }
}

// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Popper } from 'react-popper';

export class Popover extends React.PureComponent<Props> {
  constructor(props) {
    super(props);

    // These two fields should be created only if `isOpen && toggle` condition is true
    // and destroyed when condition turns false.
    // But it would require usage of `this.state` and other code complications.
    // So let's not change it for now. Maybe a better solution would be found.
    this.contentRef = React.createRef();
  }

  componentDidMount() {
    const { isOpen, toggle } = this.props;
    if (isOpen && toggle) {
      this.attachDocumentEvents();
    }
  }

  componentDidUpdate() {
    const { isOpen, toggle } = this.props;
    if (isOpen && toggle) {
      this.attachDocumentEvents();
    } else {
      this.detachDocumentEvents();
    }
  }

  componentWillUnmount() {
    this.detachDocumentEvents();
  }

  handleClick = e => {
    const { target: eventTarget } = e;
    const { current: contentNode } = this.contentRef;
    const { toggle, target } = this.props;

    if (contentNode && !contentNode.contains(eventTarget) && !target.contains(eventTarget)) {
      toggle();
    }
  };

  attachDocumentEvents() {
    if (!this.listenersAttached) {
      this.toggleDocumentEvents('addEventListener');
      this.listenersAttached = true;
    }
  }

  detachDocumentEvents() {
    if (this.listenersAttached) {
      this.toggleDocumentEvents('removeEventListener');
      this.listenersAttached = false;
    }
  }

  toggleDocumentEvents(method) {
    ['click', 'touchstart'].forEach(eventType => {
      document[method](eventType, this.handleClick, true);
    });
  }

  renderPopper() {
    const { children, target, renderInBody, ...restProps } = this.props;

    return (
      <Popper referenceElement={target} {...restProps}>
        {({ ref, style, arrowProps, placement }) => (
          <div className={`popover show bs-popover-${placement}`} ref={ref} style={style}>
            <div className="popover-inner" ref={this.contentRef}>
              {children}
            </div>
            <div className="arrow" ref={arrowProps.ref} style={arrowProps.style} />
          </div>
        )}
      </Popper>
    );
  }

  render() {
    const { isOpen, renderInBody } = this.props;

    if (!isOpen) return null;

    return renderInBody ? ReactDOM.createPortal(this.renderPopper(), document.body) : this.renderPopper();
  }
}

type Props = {
  renderInBody?: boolean,
  placement?: string,
  isOpen?: boolean,
  children: React.ReactNode,
  target: object | Element,
  // toogle: Function,
};

Popover.defaultProps = {
  target: null,
  renderInBody: true,
  isOpen: false,
  placement: 'auto',
  toggle: undefined,
};

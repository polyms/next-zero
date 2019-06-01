// @flow
/* globals document:true window:true */
import React from 'react';
import classNames from 'classnames';

export const BodyColorContext = React.createContext();

const getBodyColor = () => {
  const body = document.getElementsByTagName('body')[0];
  const { backgroundColor } = window.getComputedStyle(body);

  return backgroundColor;
};

export class Root extends React.PureComponent<Props> {
  state = {
    backgroundColor: undefined,
  };

  componentDidMount() {
    this.setState({
      backgroundColor: getBodyColor(),
    });
  }

  render() {
    const { children, className, ...restProps } = this.props;
    const { backgroundColor } = this.state;
    return (
      <div className={classNames('d-flex flex-column', className)} {...restProps}>
        <BodyColorContext.Provider value={backgroundColor}>{children}</BodyColorContext.Provider>
      </div>
    );
  }
}

type Props = {
  className?: string,
  children: React.ReactNode,
};

Root.defaultProps = {
  className: undefined,
  children: undefined,
};

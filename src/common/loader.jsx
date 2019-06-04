/* @flow */
import withStyles from 'react-jss';
import { PureComponent, type ReactNode } from 'react';
import classnames from 'classnames';
import { PulseLoader, ScaleLoader } from 'react-spinners';

const styles = withStyles({
  loader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,.7)',
    'z-index': 2000,
  },
});

type LoaderProps = {
  className?: string,
  loading: boolean,
};

class Loader extends PureComponent<LoaderProps> {
  state = {};

  componentDidMount() {
    this.loaderElem.parentElement.addEventListener('scroll', this.handleScrollChange);
  }

  componentWillUnmount() {
    this.loaderElem.parentElement.removeEventListener('scroll', this.handleScrollChange);
  }

  handleScrollChange = ({ target }) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ top: target.scrollTop });
  };

  render() {
    const { className, loading } = this.props;
    return (
      <div
        className={classnames('d-flex justify-content-center align-items-center', className, {
          invisible: !loading,
        })}
        style={this.state}
        /* eslint-disable-next-line no-return-assign */
        ref={ref => (this.loaderElem = ref)}
      >
        <PulseLoader size={15} color="#36D7B7" loading />
      </div>
    );
  }
}
Loader.defaultProps = {
  className: undefined,
};

type OverlayWrapperProps = {
  children: ReactNode,
  classes: object,
};

const OverlayWrapper = ({ children, classes, ...props }: OverlayWrapperProps) => {
  return (
    <>
      {/* eslint-disable-next-line no-return-assign */}
      <Loader className={classes.loader} {...props} />
      {children}
    </>
  );
};
export const OverlayLoader = styles(OverlayWrapper);

export function PageLoader(props) {
  return (
    <div className="flex-grow-1 d-flex justify-content-center align-items-center">
      <ScaleLoader height={50} width={6} color="#36D7B7" margin="3px" radius={2} loading {...props} />
    </div>
  );
}

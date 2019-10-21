/* @flow */
import { useEffect, useCallback, useState, useRef } from 'react';
import classnames from 'classnames';
import { PulseLoader, ScaleLoader } from 'react-spinners';
import styled from 'styled-components';

type LoaderProps = {
  scrollTarget?: string,
  className?: string,
  loading: boolean,
};

const Loader: SFC<LoaderProps> = ({ scrollTarget, className, loading }: LoaderProps) => {
  const loaderRef = useRef();
  const [top, setTop] = useState(0);

  const handleScrollChange = useCallback(({ target }) => {
    // eslint-disable-next-line react/no-unused-state
    setTop(target.scrollTop);
  });

  useEffect(() => {
    let ref = loaderRef.current.parentElement;
    if (scrollTarget) ref = document.getElementById(scrollTarget);
    ref.addEventListener('scroll', handleScrollChange);

    return () => {
      ref.removeEventListener('scroll', handleScrollChange);
    };
  }, [handleScrollChange, scrollTarget]);

  return (
    <div
      className={classnames('d-flex justify-content-center align-items-center', className, {
        invisible: !loading,
      })}
      style={{ top }}
      ref={loaderRef}
      /* eslint-disable-next-line no-return-assign */
    >
      <PulseLoader size={15} color="#36D7B7" loading />
    </div>
  );
};
Loader.defaultProps = {
  className: undefined,
  scrollTarget: undefined,
};

export const OverlayLoader = styled(Loader)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.3);
  z-index: 2000;
`;

export function PageLoader(props) {
  return (
    <div className="flex-grow-1 d-flex justify-content-center align-items-center">
      <ScaleLoader height={50} width={6} color="#36D7B7" margin="3px" radius={2} loading {...props} />
    </div>
  );
}

// @flow
import classNames from 'classnames';

export const EmptyMessage = ({ getMessage, className, ...restProps }: Props) => (
  <div className={classNames('py-5 text-center', className)} {...restProps}>
    <big className="text-muted">{getMessage('noColumns')}</big>
  </div>
);

EmptyMessage.defaultProps = {
  className: undefined,
};

type Props = {
  getMessage: Function,
  className?: string,
};

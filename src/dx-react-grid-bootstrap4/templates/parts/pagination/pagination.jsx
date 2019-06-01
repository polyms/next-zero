/* @flow */
import classNames from 'classnames';

export type Props = {
  className?: string,
  listClassName?: string,
};

export const Pagination = (props: Props) => {
  const { className, listClassName, ...restProps } = props;

  return (
    <nav className={className}>
      <ul className={classNames('pagination', listClassName)} {...restProps} />
    </nav>
  );
};

Pagination.defaultProps = {
  className: undefined,
  listClassName: undefined,
};

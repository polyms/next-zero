/* @flow */
import classNames from 'classnames';

export type Props = {
  active?: boolean,
  disabled?: boolean,
};

export const PaginationItem = (props: Props) => {
  const { active, disabled, ...restProps } = props;

  return <li className={classNames('page-item', { active, disabled })} {...restProps} />;
};

PaginationItem.defaultProps = {
  active: false,
  disabled: false,
};

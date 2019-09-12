/* @flow */
import classNames from 'classnames';

export type Props = {
  component: Function,
  className?: string,
  beforeBorder?: boolean,
};

export const BandedHeaderCell = (props: Props) => {
  const { component: HeaderCellComponent, className, beforeBorder, ...restProps } = props;

  return (
    <HeaderCellComponent
      className={classNames(
        {
          'dx-g-bs4-banded-header-cell border-right': true,
          'border-left': beforeBorder,
        },
        className
      )}
      {...restProps}
    />
  );
};

BandedHeaderCell.defaultProps = {
  className: undefined,
  beforeBorder: false,
};

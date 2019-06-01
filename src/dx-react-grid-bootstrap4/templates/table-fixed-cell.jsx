/* @flow */
import { PureComponent } from 'react';
import classNames from 'classnames';
import { BodyColorContext } from './layout';

type Props = {
  className?: string,
  style?: Object,
  component: Function,
  side: string,
  position?: number,
  showLeftDivider?: boolean,
  showRightDivider?: boolean,
};

export class FixedCell extends PureComponent {
  props: Props;

  render() {
    const {
      component: CellPlaceholder,
      side,
      showLeftDivider,
      showRightDivider,
      className,
      style,
      position,
      ...restProps
    } = this.props;
    const backgroundColor = this.context;

    return (
      <CellPlaceholder
        className={classNames(
          {
            'position-sticky': true,
            'dx-g-bs4-fixed-cell': true,
            'border-left': showLeftDivider,
            'border-right': showRightDivider,
          },
          className
        )}
        style={{
          ...style,
          backgroundColor,
          [side]: position,
        }}
        {...restProps}
      />
    );
  }
}

FixedCell.contextType = BodyColorContext;

FixedCell.defaultProps = {
  className: undefined,
  style: null,
  showLeftDivider: false,
  showRightDivider: false,
  position: undefined,
};

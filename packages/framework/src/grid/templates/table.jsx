/* @flow */
import { type ReactNode, Component } from 'react';
import classNames from 'classnames';
import { RefType } from '@devexpress/dx-react-core';
import { BodyColorContext } from './layout';

type Props = {
  use?: 'head' | 'foot',
  children: ReactNode,
  style?: Object,
  className?: string,
  tableRef: RefType,
};

// eslint-disable-next-line react/prefer-stateless-function
export class Table extends Component {
  props: Props;

  render() {
    const { children, use, style, className, tableRef, ...restProps } = this.props;
    const backgroundColor = this.context;

    return (
      <table
        ref={tableRef}
        className={classNames(
          {
            'table dx-g-bs4-table': true,
            'dx-g-bs4-table-sticky': !!use,
            'dx-g-bs4-table-head': use === 'head',
            'dx-g-bs4-table-foot': use === 'foot',
          },
          className
        )}
        {...restProps}
        style={{
          ...style,
          ...(use
            ? {
                backgroundColor,
              }
            : null),
        }}
      >
        {children}
      </table>
    );
  }
}

Table.contextType = BodyColorContext;

Table.defaultProps = {
  className: undefined,
  use: undefined,
  style: null,
};

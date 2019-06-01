/* @flow */

export type Props = {
  getCellDimensions: Function,
  style?: Object,
};

export const TableReorderingCell = (props: Props) => {
  const { style, getCellDimensions } = props;
  const refHandler = node =>
    node &&
    getCellDimensions(() => {
      const { left, right } = node.getBoundingClientRect();
      return { left, right };
    });
  return <td ref={refHandler} className="p-0 border-0" style={style} />;
};

TableReorderingCell.defaultProps = {
  style: null,
};

/* @flow */
type Props = { level?: number };

export const TableTreeIndent = (props: Props) => {
  const { level } = props;

  return Array.from({ length: level }).map((value, currentLevel) => (
    <span
      // eslint-disable-next-line react/no-array-index-key
      key={currentLevel}
      className="d-inline-block mr-4"
    />
  ));
};

TableTreeIndent.defaultProps = {
  level: 0,
};

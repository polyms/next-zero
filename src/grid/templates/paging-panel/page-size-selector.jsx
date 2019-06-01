/* @flow */
import { Pagination, PaginationItem, PaginationLink } from '../parts/pagination';

export type Props = {
  pageSize: number,
  onPageSizeChange: Function,
  pageSizes: Array<number>,
  getMessage: Function,
};

export const PageSizeSelector = (props: Props) => {
  const { pageSize, onPageSizeChange, pageSizes, getMessage } = props;

  const showAll = getMessage('showAll');
  return (
    <div className="d-inline-block">
      <select
        className="form-control d-sm-none"
        value={pageSize}
        onChange={e => onPageSizeChange(parseInt(e.target.value, 10))}
      >
        {pageSizes.map(val => (
          <option key={val} value={val}>
            {val || showAll}
          </option>
        ))}
      </select>
      <Pagination className="d-none d-sm-flex" listClassName="m-0">
        {pageSizes.map(item => (
          <PaginationItem key={item} active={item === pageSize && true}>
            <PaginationLink
              href="#"
              onClick={e => {
                e.preventDefault();
                onPageSizeChange(item);
              }}
            >
              {item || showAll}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
    </div>
  );
};

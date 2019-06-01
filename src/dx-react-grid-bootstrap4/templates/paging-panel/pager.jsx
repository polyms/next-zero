/* @flow */
import classNames from 'classnames';
import { PageSizeSelector } from './page-size-selector';
import { Pagination } from './pagination';

export type Props = {
  currentPage: number,
  onCurrentPageChange: Function,
  totalPages: number,
  pageSize: number,
  onPageSizeChange: Function,
  pageSizes: Array<number>,
  totalCount: number,
  getMessage: Function,
  className?: string,
};

export const Pager = (props: Props) => {
  const {
    currentPage,
    onCurrentPageChange,
    totalPages,
    pageSize,
    onPageSizeChange,
    pageSizes,
    totalCount,
    getMessage,
    className,
    ...restProps
  } = props;

  return (
    <div className={classNames('clearfix card-footer dx-g-bs4-paging-panel', className)} {...restProps}>
      {!!pageSizes.length && (
        <PageSizeSelector
          pageSize={pageSize}
          onPageSizeChange={onPageSizeChange}
          pageSizes={pageSizes}
          getMessage={getMessage}
        />
      )}
      <Pagination
        totalPages={totalPages}
        totalCount={totalCount}
        currentPage={currentPage}
        onCurrentPageChange={page => onCurrentPageChange(page)}
        pageSize={pageSize}
        getMessage={getMessage}
      />
    </div>
  );
};

Pager.defaultProps = {
  className: undefined,
};

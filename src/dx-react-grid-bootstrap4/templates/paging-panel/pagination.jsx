/* @flow */
import { firstRowOnPage, lastRowOnPage, calculateStartPage } from '@devexpress/dx-grid-core';
import { Pagination as PaginationBS4, PaginationLink, PaginationItem } from '../parts/pagination';

const renderPageButtons = (currentPage, totalPageCount, currentPageChange) => {
  const pageButtons = [];
  const maxButtonCount = 3;
  let startPage = 1;
  let endPage = totalPageCount || 1;

  if (maxButtonCount < totalPageCount) {
    startPage = calculateStartPage(currentPage + 1, maxButtonCount, totalPageCount);
    endPage = startPage + maxButtonCount - 1;
  }
  if (startPage > 1) {
    pageButtons.push(
      <PaginationItem key={1}>
        <PaginationLink href="#" onClick={e => currentPageChange(e, 0)}>
          {1}
        </PaginationLink>
      </PaginationItem>
    );

    if (startPage > 2) {
      pageButtons.push(
        <PaginationItem key="ellipsisStart" disabled>
          <PaginationLink>...</PaginationLink>
        </PaginationItem>
      );
    }
  }

  for (let page = startPage; page <= endPage; page += 1) {
    pageButtons.push(
      <PaginationItem key={page} active={page === currentPage + 1} disabled={startPage === endPage}>
        <PaginationLink href="#" onClick={e => currentPageChange(e, page - 1)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    );
  }

  if (endPage < totalPageCount) {
    if (endPage < totalPageCount - 1) {
      pageButtons.push(
        <PaginationItem key="ellipsisEnd" disabled>
          <PaginationLink>...</PaginationLink>
        </PaginationItem>
      );
    }

    pageButtons.push(
      <PaginationItem key={totalPageCount}>
        <PaginationLink href="#" onClick={e => currentPageChange(e, totalPageCount - 1)}>
          {totalPageCount}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return pageButtons;
};

export type Props = {
  totalPages: number,
  currentPage: number,
  onCurrentPageChange: Function,
  totalCount: number,
  pageSize: number,
  getMessage: Function,
};

export const Pagination = (props: Props) => {
  const { totalPages, currentPage, onCurrentPageChange, totalCount, pageSize, getMessage } = props;

  const from = firstRowOnPage(currentPage, pageSize, totalCount);
  const to = lastRowOnPage(currentPage, pageSize, totalCount);
  const currentPageChange = (e, nextPage) => {
    e.preventDefault();
    onCurrentPageChange(nextPage);
  };
  return (
    <>
      <PaginationBS4 className="float-right d-none d-sm-flex" listClassName="m-0">
        <PaginationItem disabled={currentPage === 0}>
          <PaginationLink previous href="#" onClick={e => currentPageChange(e, currentPage - 1)} />
        </PaginationItem>
        {renderPageButtons(currentPage, totalPages, currentPageChange)}
        <PaginationItem disabled={currentPage === totalPages - 1 || totalCount === 0}>
          <PaginationLink next href="#" onClick={e => currentPageChange(e, currentPage + 1)} />
        </PaginationItem>
      </PaginationBS4>

      <PaginationBS4 className="float-right d-sm-none" listClassName="m-0">
        <PaginationItem disabled={currentPage === 0}>
          <PaginationLink previous href="#" onClick={e => currentPageChange(e, currentPage - 1)} />
        </PaginationItem>
        &nbsp;
        <PaginationItem disabled={currentPage === totalPages - 1 || totalCount === 0}>
          <PaginationLink next href="#" onClick={e => currentPageChange(e, currentPage + 1)} />
        </PaginationItem>
      </PaginationBS4>
      <span className="float-right d-sm-none mr-4">
        <span className="d-inline-block align-middle">{getMessage('info', { from, to, count: totalCount })}</span>
      </span>
    </>
  );
};

/* @flow */
import { type ReactNode } from 'react';

export type Props = {
  previous?: boolean,
  next?: boolean,
  children?: ReactNode,
};

export const PaginationLink = (props: Props) => {
  const { previous, next, children, ...restProps } = props;

  let ariaLabel = '';
  let content = children;

  if (next || previous) {
    let angleQuote;
    if (next) {
      angleQuote = '\u00bb';
      ariaLabel = 'Next';
    }
    if (previous) {
      angleQuote = '\u00ab';
      ariaLabel = 'Previous';
    }

    content = [
      <span aria-hidden="true" key="caret">
        {children || angleQuote}
      </span>,
      <span className="sr-only" key="sr">
        {ariaLabel}
      </span>,
    ];
  }

  return (
    <a className="page-link" aria-label={ariaLabel} {...restProps}>
      {content}
    </a>
  );
};

PaginationLink.defaultProps = {
  previous: false,
  next: false,
  children: undefined,
};

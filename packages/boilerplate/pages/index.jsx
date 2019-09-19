import React from 'react';
import styled from 'styled-components';
import { Badge } from 'reactstrap';
import Meta from '../src/components/Meta';

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export default function MainPage() {
  return (
    <>
      <Meta />

      <Main>
        <h1 className="text-primary">
          @next-zero/boilerplate{' '}
          <small>
            <Badge>v0.0.1</Badge>
          </small>{' '}
          🚀
        </h1>
        <h2 className="mt-5">
          <span role="img" aria-label="">
            made with ❤️ by{' '}
          </span>
          <small>
            <a href="https://github.com/lazydev0199" target="_blank" rel="noopener noreferrer">
              @Lazy dev team
            </a>
          </small>
        </h2>
      </Main>
    </>
  );
}

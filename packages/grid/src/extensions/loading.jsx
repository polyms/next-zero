import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.3);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Loading = () => (
  <Wrapper className="d-flex justify-content-center align-items-center">
    <FontAwesomeIcon icon={faSyncAlt} size="lg" spin />
  </Wrapper>
);

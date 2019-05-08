import React from 'react';
import styled, { css } from 'styled-components';

const gridWidth = '114rem';
const gutterVertical = '8rem';
const gutterHorizontal = '6rem';

const Row = styled.div`
  max-width: ${gridWidth};
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: ${gutterVertical};
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

const BaseCol = styled.div`
  float: left;

  &:not(:last-child) {
    margin-right: ${gutterHorizontal};
  }
`;
const Col = styled(BaseCol)`
  background-color: blue;
  ${({ numCols, width }) => {
    return css`
      width: calc(
        ${width} * ((100% - ${numCols - 1} * ${gutterHorizontal}) / ${numCols}) +
          ((${width} - 1) * ${gutterHorizontal})
      );
    `;
  }}
`;

function App() {
  return (
    <div>
      <Row>
        <Col width={1} numCols={2}>
          col 1 of 2
        </Col>
        <Col width={1} numCols={2}>
          col 1 of 2
        </Col>
      </Row>
      <Row>
        <Col width={1} numCols={3}>
          col 1 of 3
        </Col>
        <Col width={2} numCols={3}>
          col 2 of 3
        </Col>
      </Row>
      <Row>
        <Col width={1} numCols={3}>
          col 1 of 3
        </Col>
        <Col width={1} numCols={3}>
          col 1 of 3
        </Col>
        <Col width={1} numCols={3}>
          col 1 of 3
        </Col>
      </Row>
      <Row>
        <Col width={1} numCols={4}>
          col 1 of 4
        </Col>
        <Col width={1} numCols={4}>
          col 1 of 4
        </Col>
        <Col width={1} numCols={4}>
          col 1 of 4
        </Col>
        <Col width={1} numCols={4}>
          col 1 of 4
        </Col>
      </Row>
      <Row>
        <Col width={1} numCols={4}>
          col 1 of 4
        </Col>
        <Col width={2} numCols={4}>
          col 2 of 4
        </Col>
        <Col width={1} numCols={4}>
          col 1 of 4
        </Col>
      </Row>
    </div>
  );
}

export default App;

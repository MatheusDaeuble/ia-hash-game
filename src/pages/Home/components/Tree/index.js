import React from 'react';
import { Container, Line, Status } from './styles';
import Node from './Node';

const Tree = ({ data, gameStates, selecteds }) => {
  return (
    <Container>
      {data.map((line, index) => (
        <>
          <Status>
            <h1>Possíveis jogadas para: </h1>
            <Node gameState={gameStates[index]} />
          </Status>
          <Line>
            {line.map((hash, selectI) => (
              <Node gameState={hash} selected={selecteds[index] === selectI} />
            ))}
          </Line>
        </>
      ))}
    </Container>
  );
};

export default Tree;

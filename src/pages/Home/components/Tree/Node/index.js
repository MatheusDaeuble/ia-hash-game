import React from 'react';
import { Container, Box, XStyled, OStyled, Hash, Wrapper } from './styles';

const X = ({ size }) => <XStyled size={size}>X</XStyled>;

const O = ({ size }) => <OStyled size={size}>O</OStyled>;

const Node = ({ size = 20, gameState = new Array(9).fill('-'), selected }) => {
  const renderItem = item => {
    switch (item) {
      case 'x':
        return <X size={size} />;
      case 'o':
        return <O size={size} />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      {selected && <p>Escolhido</p>}
      <Container size={size} selected={selected}>
        <Hash>
          {gameState.map(item => (
            <Box size={size}>{renderItem(item)}</Box>
          ))}
        </Hash>
      </Container>
    </Wrapper>
  );
};

export default Node;

/* eslint-disable no-case-declarations */
import React, { useState, useEffect } from 'react';
import { Container, Box, XStyled, OStyled, Hash } from './styles';
import { jogadaComputador, verificarFimDeJogo } from '../../util';

const X = ({ size }) => <XStyled size={size}>X</XStyled>;

const O = ({ size }) => <OStyled size={size}>O</OStyled>;

const Game = ({ size = 50, onPlayerX, onPlayerO, onIASelect }) => {
  const [player, setPlayer] = useState('o');
  const [gameState, setGameState] = useState(new Array(9).fill('-'));
  const [finish, setFinish] = useState(false);

  const togglePlayer = () => setPlayer(player === 'x' ? 'o' : 'x');

  useEffect(() => {
    onPlayerO(gameState);
    setFinish(verificarFimDeJogo(gameState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]);

  useEffect(() => {
    switch (player) {
      case 'x':
        const { target, possibilities } = jogadaComputador(gameState);
        onPlayerX(possibilities);
        const game = [...gameState];
        game[target] = 'x';
        onIASelect(
          possibilities.findIndex(
            possibility => JSON.stringify(possibility) === JSON.stringify(game)
          )
        );
        setGameState(game);
        togglePlayer();
        break;
      case 'o':
        onPlayerO();
        break;
      default:
        break;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

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

  const select = index => {
    if (gameState[index] === '-' && !finish) {
      gameState[index] = player;
      togglePlayer();
      setGameState(gameState);
    }
  };

  return (
    <Container size={size}>
      <Hash>
        {gameState.map((item, index) => (
          <Box size={size} onClick={() => select(index)}>
            {renderItem(item)}
          </Box>
        ))}
      </Hash>
    </Container>
  );
};

export default Game;

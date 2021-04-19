import React, { useState } from 'react';
import Game from './components/Game';
import Tree from './components/Tree';
import { Background } from './styles';

const Home = () => {
  const [tree, setTree] = useState([]);
  const [gameStates, setGameStates] = useState([]);
  const [selecteds, setSelecteds] = useState([]);

  const drawTree = possibilities => {
    setTree([...tree, possibilities]);
  };

  return (
    <Background>
      <Game
        onPlayerX={drawTree}
        onIASelect={i => setSelecteds([...selecteds, i])}
        onPlayerO={value => value && setGameStates([...gameStates, value])}
      />
      <Tree data={tree} gameStates={gameStates} selecteds={selecteds} />
    </Background>
  );
};

export default Home;

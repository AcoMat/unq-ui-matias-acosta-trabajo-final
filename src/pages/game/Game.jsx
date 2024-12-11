import { useContext, useEffect, useState } from 'react';
import { GameStateContext } from '../../context/GameStateContext';
import Board from '../../components/board/Board';
import './Game.css';
function Game() {
  const { pairsQuantity, nextStage } = useContext(GameStateContext);
  const [boardSize, setBoardSize] = useState({width: 0, height: 0});

  useEffect(() => {
    setBoardSize(calculateBoardDimensions(pairsQuantity));
  }, []);

  const calculateBoardDimensions = (wantedPairs) => {
    const totalCards = wantedPairs * 2;

    let height = Math.ceil(Math.sqrt(totalCards)) ;
    let width = Math.ceil(totalCards / height);
    console.log(height, width);
    
    
    return { width, height };
}

  return (
    <div className='board-container'>
      <Board height={boardSize.height} width={boardSize.width} />
      <button onClick={nextStage}>Terminar</button>
    </div>
  );
}

export default Game;
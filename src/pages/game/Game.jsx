import { useContext, useEffect, useState } from 'react';
import { GameStateContext } from '../../context/GameStateContext';
import Board from '../../components/board/Board';
import './Game.css';
import { MultiplayerContext } from '../../context/MultiplayerContext';
import soloIco from "../../assets/solo.svg";


function Game() {
  const { pairsQuantity, prevStage } = useContext(GameStateContext);
  const { multiplayerEnabled, playerOneTurn } = useContext(MultiplayerContext);
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
      {
      multiplayerEnabled &&
      <div className='players-info'>
        {playerOneTurn && <img src={soloIco}/>}
        {playerOneTurn ? <span>Turno del Jugador 1</span> : <span>Turno del Jugador 2</span>}
        {!playerOneTurn && <img src={soloIco}/>}
      </div>
      }
      <Board height={boardSize.height} width={boardSize.width} />
      <button className='back-button' onClick={() => prevStage()}>Volver</button>
    </div>
  );
}

export default Game;
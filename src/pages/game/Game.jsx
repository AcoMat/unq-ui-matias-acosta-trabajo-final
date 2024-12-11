import { useContext } from 'react';
import { GameStateContext } from '../../context/GameStateContext';
import Board from '../../components/board/Board';
import './Game.css';
function  Game() {
    const { boardSize, nextStage } = useContext(GameStateContext);
    return (
        <div className='board-container'>
            <Board height={boardSize.height} width={boardSize.width} />
            <div>
              <button onClick={nextStage}>Terminar</button>
            </div>
          </div>
    );
}

export default  Game;
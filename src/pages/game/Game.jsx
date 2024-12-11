import { useContext } from 'react';
import { GameStateContext } from '../../context/GameStateContext';
import Board from '../../components/board/Board';
import './Game.css';
function  Game() {
    const { nextStage } = useContext(GameStateContext);
    return (
        <div className='board-container'>
            <Board height={4} width={4} />
            <div>
              <button onClick={nextStage}>Terminar</button>
            </div>
          </div>
    );
}

export default  Game;
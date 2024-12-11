import { useContext } from 'react';
import './MainMenu.css';
import { GameStateContext } from '../../context/GameStateContext';

function MainMenu() {
    const { nextStage } = useContext(GameStateContext);
    return (
        <div>
            <div className='title-container'>
                <span className='title'>MemoTest</span>
            </div>
            <div>
                <button className='start-button' onClick={nextStage}>Jugar</button>
            </div>
        </div>
    );
}

export default MainMenu;
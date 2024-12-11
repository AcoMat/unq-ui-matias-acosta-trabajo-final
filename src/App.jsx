
import { useContext } from 'react'
import { GameStateContext } from './context/GameStateContext'
import Board from './components/board/Board';
import MainMenu from './pages/mainMenu/MainMenu';
import ChooseBoard from './pages/chooseBoard/ChooseBoard';
import Game from './pages/game/Game';

function App() {
  const { GameStages, currentStage, lastTime, nextStage, reset,  } = useContext(GameStateContext);

  return (
    currentStage === GameStages[0] ?
      <MainMenu/>
      :
      currentStage === GameStages[1] ?
        <ChooseBoard/>
        :
        currentStage === GameStages[2] ?
          <Game/>
          :
          <div>
            <h2>Game Over</h2>
            <h3>Tu tiempo fue de {lastTime} segundos</h3>
            <div>
              <button onClick={reset}>Volver a jugar</button>
            </div>
          </div>
  )
}

export default App

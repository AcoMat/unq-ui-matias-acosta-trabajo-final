
import { useContext } from 'react'
import { GameStateContext } from './context/GameStateContext'
import MainMenu from './pages/mainMenu/MainMenu';
import ChooseBoard from './pages/chooseBoard/ChooseBoard';
import Game from './pages/game/Game';
import { GameStages } from './util/gameStages';

function App() {
  const { currentStage, lastTime, reset,  } = useContext(GameStateContext);

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

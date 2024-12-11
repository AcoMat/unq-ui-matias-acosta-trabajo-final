
import { useContext } from 'react'
import { GameStateContext } from './context/GameStateContext'
import MainMenu from './pages/mainMenu/MainMenu';
import ChooseBoard from './pages/choose/chooseBoard/ChooseBoard';
import Game from './pages/game/Game';
import { GameStages } from './util/gameStages';
import GameOver from './pages/gameOver/GameOver';
import ChooseMode from './pages/choose/chooseMode/chooseMode';

function App() {
  const { currentStage } = useContext(GameStateContext);

  return (
    currentStage === GameStages[0] ?
      <MainMenu />
      :
      currentStage === GameStages[1] ?
      <ChooseMode />
      :
      currentStage === GameStages[2] ?
        <ChooseBoard />
          :
          currentStage === GameStages[3] ?
            <Game />
            :
            <GameOver />
  )
}

export default App


import { useContext } from 'react'
import { GameStateContext } from './context/GameStateContext'
import MainMenu from './pages/mainMenu/MainMenu';
import ChooseBoard from './pages/chooseBoard/ChooseBoard';
import Game from './pages/game/Game';
import { GameStages } from './util/gameStages';
import GameOver from './pages/gameOver/GameOver';

function App() {
  const { currentStage } = useContext(GameStateContext);

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
          <GameOver/>
  )
}

export default App


import { useContext } from 'react'
import './App.css'
import { GameStateContext } from './context/GameStateContext'
import Board from './components/board/Board';

function App() {
  const { GameStages, stage, nextStage, reset } = useContext(GameStateContext);

  return (
    stage === GameStages[0] ?
      <div>
        <div>
          <h1>MemoTest</h1>
        </div>
        <div>
          <button onClick={nextStage}>Jugar</button>
        </div>
      </div>
      :
      stage === GameStages[1] ?
        <div>
          <h2>Elegí una dificultad</h2>
          <div>
            <button onClick={nextStage}>Fácil</button>
            <button onClick={nextStage}>Medio</button>
            <button onClick={nextStage}>Difícil</button>
          </div>
        </div>
        :
        stage === GameStages[2] ?
          <div>
            <h2>Jugando</h2>
            <Board height={4} width={4}/>
            <div>
              <button onClick={nextStage}>Terminar</button>
            </div>
          </div>
          :
          <div>
            <h2>Game Over</h2>
            <div>
              <button onClick={reset}>Volver a jugar</button>
            </div>
          </div>
  )
}

export default App

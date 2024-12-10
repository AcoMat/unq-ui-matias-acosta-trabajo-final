
import { useContext } from 'react'
import { GameStateContext } from './context/GameStateContext'
import Board from './components/board/Board';
import { CardSelectionProvider } from './context/CardSelectionContext';

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
            <button onClick={nextStage} disabled>Medio</button>
            <button onClick={nextStage} disabled>Difícil</button>
          </div>
        </div>
        :
        stage === GameStages[2] ?
          <div>
            <h2>Jugando</h2>
            <CardSelectionProvider>
              <Board height={4} width={4} />
            </CardSelectionProvider>
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

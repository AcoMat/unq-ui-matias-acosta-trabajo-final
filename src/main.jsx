import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GameStateProvider } from './context/GameStateContext.jsx'
import { MultiplayerProvider } from './context/MultiplayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameStateProvider>
      <MultiplayerProvider>
        <App />
      </MultiplayerProvider>
    </GameStateProvider>
  </StrictMode>,
)

import { useContext } from "react";
import { GameStateContext } from "../../context/GameStateContext";
import './GameOver.css'

function GameOver() {
    const {lastTime, reset} = useContext(GameStateContext);
    return (
        <div className="gameover-container">
            <h1>Game Over</h1>
            <h3>Tu tiempo fue de {lastTime} segundos</h3>
            <div>
                <button onClick={reset}>Volver a jugar</button>
            </div>
        </div>
    );
}

export default GameOver;
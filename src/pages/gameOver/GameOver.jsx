import { useContext, useEffect, useRef } from "react";
import { GameStateContext } from "../../context/GameStateContext";
import './GameOver.css'

function GameOver() {
    const {lastTime, reset} = useContext(GameStateContext);
    
    const winmp3 = "https://cdn.discordapp.com/attachments/1025131615329988689/1316511364553904128/victory_sJDDywi.mp3?ex=675b5040&is=6759fec0&hm=71aa860a7dc35adaa906cb1abf6d8ed2bfe5219a724032a75e116aea765c70af&"
    const winAudio = useRef(null);


    useEffect(() => {
        confetti({
            spread: 180
        });
        winAudio.current.play();
    }, []);

    return (
        <div className="gameover-container">
            <audio ref={winAudio} src={winmp3} preload='auto' />
            <h1>Juego terminado!</h1>
            <h3>Tu tiempo fue de {lastTime} segundos</h3>
            <div>
                <button onClick={reset}>Volver a jugar</button>
            </div>
        </div>
    );
}

export default GameOver;
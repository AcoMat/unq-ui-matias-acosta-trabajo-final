import soloIco from "../../../assets/solo.svg";
import multiIco from "../../../assets/multi.svg";
import { useContext } from "react";
import { GameStateContext } from "../../../context/GameStateContext";
import { MultiplayerContext } from "../../../context/MultiplayerContext";

function ChooseMode() {
    const { nextStage } = useContext(GameStateContext);
    const { setMultiplayerEnabled } = useContext(MultiplayerContext);

    const multiplayerSelected = (bool) => {
        setMultiplayerEnabled(bool);
        nextStage();
    }

    return (
        <div className='choose-container'>
            <h2>Elegí un modo</h2>
            <div className='options'>
                <button className='difficulty-button' onClick={() => multiplayerSelected(false)}>
                    <img src={soloIco}/>
                    Un Jugador
                    </button>
                <button className='difficulty-button' onClick={() => multiplayerSelected(true)}>
                    <img src={multiIco}/>
                    Dos Jugadores
                    </button>
            </div>
        </div>
    );
}

export default ChooseMode;
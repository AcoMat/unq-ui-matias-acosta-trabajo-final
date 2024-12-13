import { useContext, useState } from 'react';
import { GameStateContext } from '../../../context/GameStateContext';
import '../Choose.css';
function ChooseBoard() {
    const { nextStage, prevStage, setPairsQuantity } = useContext(GameStateContext);
    const [customNumber, setCustomNumber] = useState(4);

    const handleClick = (pairs) => {
        setPairsQuantity(pairs);
        console.log("pares seleccionados" + pairs);
        
        nextStage();
    }

    return (
        <div className='choose-container'>
            <h2>Elegí un tablero</h2>
            <div className='options'>
                <button className='difficulty-button' onClick={() => handleClick(8)}>4 x 4</button>
                <button className='difficulty-button' onClick={() => handleClick(15)}>6 x 5</button>
                <button className='difficulty-button' onClick={() => handleClick(32)}>8 x 8</button>
            </div>
            <div className='custom-board'>
                <label>Personalizado (cant. de pares):</label>
                <input value={customNumber} type="number" min="2" max="32" onChange={e => setCustomNumber(e.target.value)} />
                <button
                    className={`${customNumber % 2 == 1 || customNumber < 4 || customNumber > 32 ? 'disabled' : ''}`}
                    onClick={() => handleClick(customNumber)}
                    disabled={customNumber % 2 == 1 || customNumber < 4 || customNumber > 32}
                >Crear</button>
            </div>
            {customNumber % 2 == 1 && <span className='warning'>El número debe ser par</span>}
            {customNumber < 4 && <span className='warning'>Minimo 4 pares</span>}
            {customNumber > 32 && <span className='warning'>Maximo 32 pares</span>}
            <button className='back-button' onClick={() => prevStage()}>Volver</button>

        </div>
    );
}

export default ChooseBoard;
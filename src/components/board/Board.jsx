import { CardSelectionProvider } from '../../context/CardSelectionContext';
import { GameStateContext } from '../../context/GameStateContext';
import { cardImages } from '../../util/images-import';
import Card from '../card/Card';
import './Board.css';
import { useContext, useEffect, useState } from 'react';

function Board({ height, width }) {
    const [gamePairs, setGamePairs] = useState([]);
    const { pairsQuantity } = useContext(GameStateContext);

    useEffect(() => {
        console.log("Board creado");
        console.log("Pares restantes: " + pairsQuantity);

        let randomPairs = [];
        for (let i = 0; i < pairsQuantity; i++) {
            randomPairs = [...randomPairs, (Object.keys(cardImages)[Math.floor(Math.random() * Object.keys(cardImages).length)])];
        }

        randomPairs = randomPairs.concat(randomPairs);
        console.log(randomPairs);

        setGamePairs(randomPairs);
        
    }, []);

    return (
        <CardSelectionProvider height={height} width={width}>
            <div className='board' style={{
                gridTemplateColumns: `repeat(${width}, 6rem)`, 
                gridTemplateRows: `repeat(${height}, 9rem)`,
            }}>
                {gamePairs.map((card, index) => (
                    <Card key={index} value={card} />
                ))}
            </div>
        </CardSelectionProvider>
    );
}

export default Board;
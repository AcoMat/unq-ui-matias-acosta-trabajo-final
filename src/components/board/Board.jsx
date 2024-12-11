import { CardSelectionProvider } from '../../context/CardSelectionContext';
import { GameStateContext } from '../../context/GameStateContext';
import { cardImages } from '../../util/images-import';
import Card from '../card/Card';
import './Board.css';
import { useEffect, useState } from 'react';

function Board({ height, width }) {
    const [gamePairs, setGamePairs] = useState([]);
    const boardSize = height * width;

    useEffect(() => {
        console.log("Board creado");
        console.log("Pares restantes: " + (boardSize / 2));

        let randomPairs = [];
        for (let i = 0; i < (boardSize / 2); i++) {
            randomPairs = [...randomPairs, (Object.keys(cardImages)[Math.floor(Math.random() * Object.keys(cardImages).length)])];
        }

        randomPairs = randomPairs.concat(randomPairs);

        // Fisher-Yates Shuffle
        for (let i = randomPairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomPairs[i], randomPairs[j]] = [randomPairs[j], randomPairs[i]];
        }

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
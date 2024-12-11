import { CardSelectionProvider } from '../../context/CardSelectionContext';
import { GameStateContext } from '../../context/GameStateContext';
import { MultiplayerContext } from '../../context/MultiplayerContext';
import { cardImages } from '../../util/images-import';
import Card from '../card/Card';
import './Board.css';
import { useContext, useEffect, useState } from 'react';

function Board({ height, width }) {
    const [gamePairs, setGamePairs] = useState([]);
    const { pairsQuantity } = useContext(GameStateContext);
    const { reset } = useContext(MultiplayerContext);

    useEffect(() => {
        let randomPairs = [];
        for (let i = 0; i < pairsQuantity; i++) {
            randomPairs = [...randomPairs, (Object.keys(cardImages)[Math.floor(Math.random() * Object.keys(cardImages).length)])];
        }

        randomPairs = randomPairs.concat(randomPairs);

        // Fisher-Yates Shuffle
        for (let i = randomPairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomPairs[i], randomPairs[j]] = [randomPairs[j], randomPairs[i]];
        }

        reset();
        setGamePairs(randomPairs);
    }, []);

    return (
        <CardSelectionProvider>
            <div className='board' style={{
                gridTemplateColumns: `repeat(${width}, 80px)`, 
                gridTemplateRows: `repeat(${height}, 100px)`,
            }}>
                {gamePairs.map((card, index) => (
                    <Card key={index} value={card} />
                ))}
            </div>
        </CardSelectionProvider>
    );
}

export default Board;
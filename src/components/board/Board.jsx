import { CardSelectionProvider } from '../../context/CardSelectionContext';
import { GameStateContext } from '../../context/GameStateContext';
import { cardImages } from '../../util/images-import';
import Card from '../card/Card';
import './Board.css';
import { useContext, useEffect, useState } from 'react';

function Board({ height, width }) {
    const [duplicatedPairs, setDuplicatedPairs] = useState([]);
    const { boardSize, setBoardSize } = useContext(GameStateContext);

    useEffect(() => {
        setBoardSize(height * width); 
        console.log("Board creado");
        console.log("Pares restantes: " + (boardSize / 2));

        let gamePairs = [];
        for (let i = 0; i < (boardSize / 2); i++) {
            gamePairs = [...gamePairs, (Object.keys(cardImages)[Math.floor(Math.random() * Object.keys(cardImages).length)])];
        }

        let pairs = gamePairs.concat(gamePairs);
        
        // Fisher-Yates Shuffle
        for (let i = pairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
        }

        setDuplicatedPairs(pairs); 
        console.log(duplicatedPairs);
    }, []);

    

    return (
        <div className="board four-columns">
            <CardSelectionProvider>
                {duplicatedPairs.map((card, index) => (
                    <Card key={index} value={card} />
                ))}
            </CardSelectionProvider>
        </div>
    );
}

export default Board;
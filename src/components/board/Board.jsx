import { allCards } from '../../util/images-import';
import Card from '../card/Card';
import './Board.css';
import {useEffect, useState } from 'react';

function Board({ height, width }) {
    const [selectedCard, setSelectedCard] = useState(null);
    const [pairsRemain, setPairsRemain] = useState(height * width / 2);
    const [duplicatedPairs, setDuplicatedPairs] = useState([]);
    useEffect(() => {
        console.log("Board creado");
        console.log("Pares restantes: " + pairsRemain);

        let gamePairs = [];
        for (let i = 0; i < pairsRemain; i++) {
            gamePairs = [...gamePairs, (allCards[Math.floor(Math.random() * allCards.length)])];
        }

        let pairs = gamePairs.concat(gamePairs);

        // Fisher-Yates Shuffle
        for (let i = pairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
        }

        setDuplicatedPairs(pairs); // Actualiza el estado
        console.log(duplicatedPairs);
    }, []);

    useEffect(() => {
        console.log("Pares restantes: " + pairsRemain);
        if (pairsRemain === 0) {
            console.log("Juego terminado");
            confetti({
                spread: 180
            });
        }
    }, [pairsRemain]);

    const addSelection = (actualCard) => {
        console.log("carta actual: " + actualCard?.value);
        console.log("carta anterior: " + selectedCard?.value);

        if (selectedCard === null) {
            setSelectedCard(actualCard);
        } else {
            if (selectedCard?.value === actualCard?.value) {
                selectedCard.setLocked(true);
                actualCard.setLocked(true);
                setSelectedCard(null);
                setPairsRemain(pairsRemain - 1);
            } else {
                setSelectedCard(null);
                selectedCard.setActive(false);
                actualCard.setActive(false);
            }
        }
    };

    return (
        <div className="board four-columns">
            {duplicatedPairs.map((card, index) => (
                <Card key={index} value={card} addSelection={addSelection} />
            ))}
        </div>
    );
}

export default Board;
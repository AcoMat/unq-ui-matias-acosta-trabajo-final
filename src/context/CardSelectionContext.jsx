import React, { createContext, useContext, useEffect, useState } from "react";
import { GameStateContext } from "./GameStateContext";

export const CardSelectionContext = createContext();

export const CardSelectionProvider = ({ children }) => {
    const [allLocked, setAllLocked] = useState(false);
    const { boardSize } = useContext(GameStateContext);
    const [selectedCard, setSelectedCard] = useState(null);
    const [pairsRemain, setPairsRemain] = useState(boardSize / 2);

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
                setAllLocked(true);
                actualCard.setActive(true);
                setTimeout(()=> {
                    actualCard.setActive(false);
                    selectedCard.setActive(false);
                    setSelectedCard(null);
                    setAllLocked(false);
                }, 1000);
            }
        }
    };

    return (
        <CardSelectionContext.Provider value={{ addSelection, allLocked}}>
            {children}
        </CardSelectionContext.Provider>
    );
};

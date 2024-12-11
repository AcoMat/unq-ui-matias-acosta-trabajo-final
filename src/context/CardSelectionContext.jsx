import React, { createContext, useContext, useEffect, useState } from "react";
import { GameStateContext } from "./GameStateContext";

export const CardSelectionContext = createContext();

export const CardSelectionProvider = ({ children, width, height }) => {
    const [allLocked, setAllLocked] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const { pairsQuantity, nextStage } = useContext(GameStateContext);
    const [pairsRemain, setPairsRemain] = useState(pairsQuantity);

    useEffect(() => {
        console.log("Pares restantes: " + pairsRemain);
        if (pairsRemain === 0) {
            setTimeout(() => {
                nextStage();
            }, 1000);
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
                setTimeout(() => {
                    actualCard.setActive(false);
                    selectedCard.setActive(false);
                    setSelectedCard(null);
                    setAllLocked(false);
                }, 1000);
            }
        }
    };

    return (
        <CardSelectionContext.Provider value={{ addSelection, allLocked }}>
            {children}
        </CardSelectionContext.Provider>
    );
};

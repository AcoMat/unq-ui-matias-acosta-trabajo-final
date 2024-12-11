import React, { createContext, useContext, useEffect, useState } from "react";
import { GameStateContext } from "./GameStateContext";
import { MultiplayerContext } from "./MultiplayerContext";

export const CardSelectionContext = createContext();

export const CardSelectionProvider = ({ children }) => {
    const [allLocked, setAllLocked] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const { pairsQuantity, nextStage } = useContext(GameStateContext);
    const { multiplayerEnabled, changeTurn, addPoint} = useContext(MultiplayerContext);
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
                addPoint();
            } else {
                setAllLocked(true);
                actualCard.setActive(true);
                setTimeout(() => {
                    actualCard.setActive(false);
                    selectedCard.setActive(false);
                    setSelectedCard(null);
                    setAllLocked(false);
                    if(multiplayerEnabled) {
                        changeTurn();
                    }
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

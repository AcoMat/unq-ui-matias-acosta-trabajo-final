import React, { createContext, useEffect, useState } from "react";
import { GameStages } from "../util/gameStages";

export const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
    const [currentStage, setCurrentStage] = useState(GameStages[0]);
    const [pairsQuantity, setPairsQuantity] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [lastTime, setLastTime] = useState(null);
    
    const nextStage = () => {
        setCurrentStage(GameStages[(GameStages.indexOf(currentStage) + 1) % GameStages.length]);
    };

    const prevStage = () => {
        setCurrentStage(GameStages[(GameStages.indexOf(currentStage) - 1)]);
    };
    
    
    useEffect(() => {
        if (currentStage === GameStages[2]) {
            setStartTime(Date.now());
        }
        if (currentStage === GameStages[3]) {
            setLastTime((Date.now() - startTime) / 1000);
        }
    }, [currentStage]);

    const reset = () => {
        setCurrentStage(GameStages[1]);
    };


    return (
        <GameStateContext.Provider value={{ currentStage, lastTime, pairsQuantity, nextStage, prevStage, reset, setPairsQuantity }}>
            {children}
        </GameStateContext.Provider>
    );
};

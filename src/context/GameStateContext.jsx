import React, { createContext, useEffect, useState } from "react";

export const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
    const GameStages = ["MENU", "CHOOSINGDIF", "PLAYING", "GAME_OVER"];
    const [currentStage, setCurrentStage] = useState(GameStages[0]);
    const [startTime, setStartTime] = useState(null);
    const [lastTime, setLastTime] = useState(null);
    
    const nextStage = () => {
        console.log((GameStages.indexOf(currentStage) + 1));
        setCurrentStage(GameStages[(GameStages.indexOf(currentStage) + 1) % GameStages.length]);
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
        setCurrentStage(GameStages[0]);
    };

    return (
        <GameStateContext.Provider value={{ GameStages, currentStage, lastTime, nextStage, reset }}>
            {children}
        </GameStateContext.Provider>
    );
};

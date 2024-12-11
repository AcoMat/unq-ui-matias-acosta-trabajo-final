import React, { createContext, useState } from "react";

export const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
    const GameStages = ["MENU", "CHOOSINGDIF", "PLAYING", "GAME_OVER"];
    const [stage, setStage] = useState(GameStages[0]);
    const [boardSize, setBoardSize] = useState(0);

    const nextStage = () => {
        console.log((GameStages.indexOf(stage) + 1));
        setStage(GameStages[(GameStages.indexOf(stage) + 1) % GameStages.length]);
    };

    const reset = () => {
        setStage(GameStages[0]);
    };

    return (
        <GameStateContext.Provider value={{ GameStages, stage, nextStage, reset, boardSize, setBoardSize }}>
            {children}
        </GameStateContext.Provider>
    );
};

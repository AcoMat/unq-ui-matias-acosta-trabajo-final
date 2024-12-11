import React, { createContext, useState } from "react";

export const MultiplayerContext = createContext();

export const MultiplayerProvider = ({ children }) => {
    const [multiplayerEnabled, setMultiplayerEnabled] = useState(false);
    const [playerOneTurn, setPlayerOneTurn] = useState(true);
    const [playerOnePoints, setPlayerOnePoints] = useState(0);
    const [playerTwoPoints, setPlayerTwoPoints] = useState(0);

    const changeTurn = () => {
        setPlayerOneTurn(!playerOneTurn);
    };

    const addPoint = () => {
        if (playerOneTurn) {
            setPlayerOnePoints(playerOnePoints + 1);
        } else {
            setPlayerTwoPoints(playerTwoPoints + 1);
        }
    };

    const reset = () => {
        setPlayerOnePoints(0);
        setPlayerTwoPoints(0);
        setPlayerOneTurn(true);
    };

    return (
        <MultiplayerContext.Provider value={{ multiplayerEnabled, playerOneTurn, playerOnePoints, playerTwoPoints, setMultiplayerEnabled, addPoint, changeTurn, reset }}>
            {children}
        </MultiplayerContext.Provider>
    );
};

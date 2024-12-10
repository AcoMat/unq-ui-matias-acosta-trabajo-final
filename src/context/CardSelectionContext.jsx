import React, { createContext, useState } from "react";

export const CardSelectionContext = createContext();

export const CardSelectionProvider = ({ children }) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const addSelection = (actualCard) => {
        console.log("carta actual: " + actualCard?.id);
        console.log("carta anterior: " + selectedCard?.id);
        
        if(selectedCard === null) {
            setSelectedCard(actualCard);
        }else {
            if(selectedCard?.id === actualCard?.id) {
                selectedCard.setLocked(true);
                actualCard.setLocked(true);
                setSelectedCard(null);
            }else {
                setSelectedCard(null);
                selectedCard.setActive(false);
                actualCard.setActive(false);

            }
        }
    };

    return (
        <CardSelectionContext.Provider value={{ addSelection }}>
            {children}
        </CardSelectionContext.Provider>
    );
};

import React, { createContext, useContext, useState } from 'react'
import { defaultInventory } from '../data/inventory'

//i don't know if i need anything else here
//or if this is fine
//idk i never fully learned how to use context
//i'll check later

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [inventory, setInventory] = useState(defaultInventory);

    const value = {
        inventory,
        setInventory,
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);
import React, { createContext, useContext, useState } from 'react'
import { defaultInventory } from '../data/inventory'

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
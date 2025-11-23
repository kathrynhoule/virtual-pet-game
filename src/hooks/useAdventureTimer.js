import React from 'react'
import { useEffect } from 'react'
import useGameStore from './useGameStore'

//this could be a bit more readable for future me's sake
//also need to change the timer part
//might want to add notifications later on as well
//also might make different durations for different adventures later

const useAdventureTimer = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            const { currentAdventure, endAdventure } = useGameStore.getState();

            if (currentAdventure && Date.now() >= currentAdventure.endTime) {
            endAdventure();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
};

export default useAdventureTimer
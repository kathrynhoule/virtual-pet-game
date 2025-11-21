import { useEffect } from 'react'
import useGameStore from './useGameStore'

//needs an update
//stats shouldn't decay so quickly on their own

const useStatDecay = () => {
    useEffect(() => {
        const interval = setInterval(() => {
        useGameStore.getState().decayStats();
        }, 5000);

        return () => clearInterval(interval);
    }, []);
}

export default useStatDecay
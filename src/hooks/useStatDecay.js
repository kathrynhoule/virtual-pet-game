import { useEffect } from 'react'
import useGameStore from './useGameStore'

const useStatDecay = () => {
    useEffect(() => {
        const interval = setInterval(() => {
        useGameStore.getState().decayStats();
        }, 5000);

        return () => clearInterval(interval);
    }, []);
}

export default useStatDecay
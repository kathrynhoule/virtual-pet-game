import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { adventureLocations } from '../data/adventures'

const AdventureScreen = () => {
    const { currentAdventure, setScreen, startAdventure } = useGameStore();

    const adventureData = currentAdventure
        ? adventureLocations[currentAdventure.location]
        : null;

    return (
        <div>
        <h2>Adventure!</h2>

        {currentAdventure ? (
            <div>
            <h3>{adventureData?.name}</h3>
            <img
                src={adventureData?.image}
                alt={adventureData?.name}
                width={200}
            />
            <p>{adventureData?.description}</p>
            <p>
                Returning in{' '}
                {Math.max(
                0,
                Math.ceil((currentAdventure.endTime - Date.now()) / 1000)
                )}{' '}
                seconds...
            </p>
            </div>
        ) : (
            <div>
            <p>No adventure in progress.</p>
            <button onClick={() => startAdventure('Forest')}>
                Start Forest Adventure
            </button>
            </div>
        )}

        <button onClick={() => setScreen('home')}>Back Home</button>
        </div>
    );
};


export default AdventureScreen
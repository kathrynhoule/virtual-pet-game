import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { adventureLocations } from '../data/adventures'

const AdventureScreen = () => {
    const { currentAdventure, setScreen, startAdventure, pet } = useGameStore();

    const unlockedLocations = Object.values(adventureLocations).filter(
        loc => pet.adventuresCompleted >= (loc.unlockAt ?? 0)
    );

    const adventureData = currentAdventure
        ? adventureLocations[currentAdventure.location]
        : null;

    return (
        <div>
            <h2>Adventure!</h2>

            {currentAdventure ? (
                <div>
                    <h3>{adventureData?.name}</h3>
                    <img src={adventureData?.image} width={200} />
                    <p>{adventureData?.description}</p>
                    <p>
                        Returning in{" "}
                        {Math.max(
                            0,
                            Math.ceil((currentAdventure.endTime - Date.now()) / 1000)
                        )}{" "}
                        seconds...
                    </p>
                </div>
            ) : (
                <div>
                    <p>Select an adventure:</p>

                    {unlockedLocations.map(loc => (
                        <button
                            key={loc.name}
                            onClick={() => startAdventure(loc.name)}
                        >
                            Go to {loc.name}
                        </button>
                    ))}

                    {Object.values(adventureLocations)
                        .filter(loc => !unlockedLocations.includes(loc))
                        .map(loc => (
                            <button key={loc.name} disabled>
                                {loc.name} (Locked)
                            </button>
                        ))}
                </div>
            )}

            <button onClick={() => setScreen('home')}>Back Home</button>
        </div>
    );
};

export default AdventureScreen
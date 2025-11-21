import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { adventureLocations } from '../data/adventures'

//will get rid of the inline styling later
//i don't want to do css right now

const AdventureScreen = () => {
    const { currentAdventure, setScreen, startAdventure, pet } = useGameStore();

    const unlockedLocations = Object.values(adventureLocations).filter(
        loc => pet.adventuresCompleted >= (loc.unlockAt ?? 0)
    );

    const adventureData = currentAdventure
        ? adventureLocations[currentAdventure.location]
        : null;

    //pet can't be too hungry or too tired or both to go on an adventure
    const canAdventure = pet.hunger > 0 && pet.energy > 0;

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

                    {!canAdventure && (
                        <p style={{ color: "red" }}>
                            Your pet is too tired or too hungry to go adventuring!
                        </p>
                    )}


                    {unlockedLocations.map(loc => (
                        <button
                            key={loc.name}
                            onClick={() => startAdventure(loc.name)}
                            disabled={!canAdventure}
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
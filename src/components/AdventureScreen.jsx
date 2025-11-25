import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { adventureLocations } from '../data/adventures'

//will get rid of the inline styling later
//i don't want to do css right now

const AdventureScreen = () => {
    const { currentAdventure, setScreen, startAdventure, pet } = useGameStore();

    //locations the pet has unlocked based on adventures completed
    const unlockedLocations = Object.values(adventureLocations).filter(
        loc => pet.adventuresCompleted >= (loc.unlockAt ?? 0)
    );

    //data for current adventure, if there are any
    let adventureData = null;

    if (currentAdventure) {
        adventureData = adventureLocations[currentAdventure.location];
    }

    //pet can't be too hungry or too tired or both to go on an adventure
    const canAdventure = pet.hunger > 0 && pet.energy > 0;

    //calc for remaining seconds of adventure
    const getRemainingSeconds = () =>
        Math.max(
            0,
            Math.ceil((currentAdventure.endTime - Date.now()) / 1000)
        );

    const formatDuration = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;

        return m > 0 ? `${m}m ${s}s` : `${s}s`;
    };

    //UI
    const renderAdventureImage = (name, image) =>
        image ? <img src={image} width={200} alt={name} /> : null;

    const renderActiveAdventure = () => {
        if (!adventureData) return null;

        const { name, image, description } = adventureData;

        return (
            <div>
                <h3>{name}</h3>
                {renderAdventureImage(name, image)}
                <p>{description}</p>
                <p>Returning in {formatDuration(getRemainingSeconds())}...</p>
            </div>
        );
    };

    const renderAdventureSelection = () => (
        <div>
            <p>Select an adventure:</p>

            {!canAdventure && (
                <p style={{ color: "red" }}>
                    Your pet is too tired or too hungry to go adventuring!
                </p>
            )}

            {/* unlocked */}
            {unlockedLocations.map((loc) => (
                <button
                    key={loc.name}
                    onClick={() => startAdventure(loc.name)}
                    disabled={!canAdventure}
                >
                    Go to {loc.name}
                </button>
            ))}

            {/* locked */}
            {Object.values(adventureLocations)
                .filter((loc) => !unlockedLocations.includes(loc))
                .map((loc) => (
                    <button key={loc.name} disabled>
                        {loc.name} (Locked)
                    </button>
                ))}
        </div>
    );


    //MAIN RETURN
    return (
        <div>
            <h2>Adventure!</h2>

            {currentAdventure
                ? renderActiveAdventure()
                : renderAdventureSelection()}

            <button onClick={() => setScreen("home")}>Back Home</button>
        </div>
    );
};

export default AdventureScreen
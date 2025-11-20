import React from 'react'
import useGameStore from '../hooks/useGameStore'

const HomeScreen = () => {
    const { pet, feedPet, playWithPet, restPet, setScreen, currentAdventure } = useGameStore();

    const getStatColor = (value) => {
        if (value < 20) return "red";
        if (value < 40) return "goldenrod";
        return "black";
    };

    const isAdventuring = currentAdventure !== null;

    return (
            <div>
                <h2>Pet Stats</h2>
                <p style={{ color: getStatColor(pet.hunger) }}>Hunger: {pet.hunger}</p>
                <p style={{ color: getStatColor(pet.happiness) }}>Happiness: {pet.happiness}</p>
                <p style={{ color: getStatColor(pet.energy) }}>Energy: {pet.energy}</p>
                <p>Adventures Completed: {pet.adventuresCompleted}</p>
                <p>Pet Stage: {pet.stage}</p>

                <button onClick={feedPet} disabled={isAdventuring}>
                Feed
                </button>
                <button onClick={playWithPet} disabled={isAdventuring}>
                Play
                </button>
                <button onClick={restPet} disabled={isAdventuring}>
                Rest
                </button>

                <hr />

                {isAdventuring && <p>Your pet is away on an adventure!</p>}

                <button onClick={() => setScreen("adventure")}>
                    Go to Adventure
                </button>
            </div>
    );
}

export default HomeScreen
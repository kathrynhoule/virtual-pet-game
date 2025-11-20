import React from 'react'
import useGameStore from '../hooks/useGameStore'

const AdventureScreen = () => {
    const { setScreen, startAdventure, currentAdventure } = useGameStore();
    {currentAdventure && (
        <p>Returning in {Math.ceil((currentAdventure.endTime - Date.now()) / 1000)} seconds...</p>
    )}

    return (
        <div>
            <h2>Adventure!</h2>

            {currentAdventure ? (
                <div>
                    <p>Your pet is on an adventure...</p>
                    <p>Returning in{" "} {Math.max(0, Math.ceil((currentAdventure.endTime - Date.now()) / 1000))} seconds...</p>
                </div>
            )
            :
            ( 
            <button onClick={startAdventure}>Start Adventure</button>
            )}

            <button onClick={() => setScreen("home")}>
            Back Home
            </button>
        </div>
    );
}


export default AdventureScreen
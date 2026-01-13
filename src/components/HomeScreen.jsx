import React from 'react'
import useGameStore from '../hooks/useGameStore'
import InventoryScreen from './InventoryScreen'
import { starterRoomOptions } from '../data/rooms'

//this is a little hell to look at right now
//will fix later

const HomeScreen = () => {
    const {
        pet,
        room,
        setScreen,
        currentAdventure,
    } = useGameStore();

    const currentRoom = starterRoomOptions[room] ?? starterRoomOptions.Old;

    const isAdventuring = currentAdventure !== null;

    const { getFormattedTime, getTimeOfDay } = useGameStore();

    return (
            <div>
                <h3>Time: {getFormattedTime()}</h3>
                <p>It's currently: {getTimeOfDay()}</p>
                
                <img src={currentRoom.image} alt={currentRoom.name} width={150} />
                
                <h2>{pet.name}</h2>
                <img src={pet.image} alt={pet.name} width={150} />

                <hr />

                {isAdventuring && <p>Your pet is away on an adventure!</p>}

                <button onClick={() => setScreen("pet")}>
                    Check on Pet
                </button>

                <button onClick={() => setScreen("adventure")}>
                    Go to Adventure
                </button>

                <button onClick={() => setScreen("shop")}>
                    Go to Shops
                </button>

                <button onClick={() => setScreen("locationSelect")}>
                    Go Out
                </button>
            </div>
    );
}

export default HomeScreen
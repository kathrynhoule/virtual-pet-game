import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { starterRoomOptions } from '../data/rooms'

//so far this is fine
//i do want to update this a little so that you can view your inventory from here and maybe don't have to go to the pet screen to see it
//and also i would like it if the in-game clock displayed here only changed the display every 15 or 30 in-game minutes, so it's not so stressfull
//i would also like it if there was some kind of visual change based on the time of day, like mood lighting or something
//but that's for whenever i finally decide to add style sheets

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
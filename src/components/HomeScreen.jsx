import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { petStages } from '../data/pets'
import InventoryScreen from './InventoryScreen'
import { starterRoomOptions } from '../data/rooms'
import { items } from '../data/items'

//this is a little hell to look at right now
//will fix later

const HomeScreen = () => {
    const {
        pet,
        room,
        feedPet,
        playWithPet,
        restPet,
        setScreen,
        currentAdventure,
        inventory
    } = useGameStore();

    const currentRoom = starterRoomOptions[room] ?? starterRoomOptions.Old;

    const getStatColor = (value) => {
        if (value < 20) return "red";
        if (value < 40) return "goldenrod";
        return "black";
    };

    const isAdventuring = currentAdventure !== null;

    return (
            <div>
                <img src={currentRoom.image} alt={currentRoom.name} width={150} />
                
                <h2>{pet.name}</h2>
                <img src={pet.image} alt={pet.name} width={150} />

                <h2>Pet Stats</h2>
                <p style={{ color: getStatColor(pet.hunger) }}>Hunger: {pet.hunger}</p>
                <p style={{ color: getStatColor(pet.happiness) }}>Happiness: {pet.happiness}</p>
                <p style={{ color: getStatColor(pet.energy) }}>Energy: {pet.energy}</p>
                <p>Adventures Completed: {pet.adventuresCompleted}</p>

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

                <h2>Inventory</h2>
                <p>Money: {inventory.money}</p>

                <h3>Items</h3>
                {inventory.items.length === 0 && <p>No items yet.</p>}

                <ul>
                    {inventory.items.map((id, i) => {
                        const itemData = items[id];
                        return (
                            <li key={i}>
                                {itemData ? itemData.name : `Unknown item (${id})`}
                            </li>
                        );
                    })}
                </ul>

                <hr />

                {isAdventuring && <p>Your pet is away on an adventure!</p>}

                <button onClick={() => setScreen("adventure")}>
                    Go to Adventure
                </button>

                <button onClick={() => setScreen("shop")}>
                    Go to Shops
                </button>
            </div>
    );
}

export default HomeScreen
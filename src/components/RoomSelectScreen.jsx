import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { starterRoomOptions } from '../data/rooms'

const RoomSelectScreen = () => {
    const { chooseStarterRoom } = useGameStore();

    return (
        <div>
        <h2>Choose Your Room</h2>

        {Object.entries(starterRoomOptions).map(([id, room]) => (
            <div key={id} style={{ marginBottom: "1rem" }}>
            <h3>{room.name}</h3>
            <img src={room.image} width={150} alt={room.name} />

            <button onClick={() => chooseStarterRoom(id)}>
                Select {room.name}
            </button>
            </div>
        ))}
        </div>
    );
}

export default RoomSelectScreen
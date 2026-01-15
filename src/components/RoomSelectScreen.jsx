import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { starterRoomOptions } from '../data/rooms'
import { NPCs } from '../data/npcs'
import DialogueBox from './DialogueBox'
import { useEffect } from 'react'

//for choosing room at the start of the game
//i think this is fine for now?
//definitely will get rid of the inline styling eventually

const RoomSelectScreen = () => {
    const { chooseStarterRoom, startDialogue, dialogue } = useGameStore();

    useEffect(() => {
        startDialogue(NPCs.Shopkeeper.scenes.roomSelect);
    }, []);
    
    return (
        <div>
            <DialogueBox />

            {!dialogue && (
            <>
                {Object.entries(starterRoomOptions).map(([id, room]) => (
                    <div key={id} style={{ marginBottom: "1rem" }}>
                    <h3>{room.name}</h3>
                    <img src={room.image} width={150} alt={room.name} />

                    <button onClick={() => chooseStarterRoom(id)}>
                        Select {room.name}
                    </button>
                    </div>
                ))}
            </>
            )}
        </div>
    );
}

export default RoomSelectScreen
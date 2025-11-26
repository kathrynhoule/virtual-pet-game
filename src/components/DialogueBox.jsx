import useGameStore from "../hooks/useGameStore"
import React from 'react'
import { NPCs } from "../data/npcs";

//i'll change and update inline styling later
//for now i just want something to make sure it works
//and i think it's funny that the felicity image for the shopkeeper has squished proportions
//so i want to leave it for now lol

const DialogueBox = () => {
    const { dialogue, dialogueIndex, nextDialogueLine, dialogueSpeaker } = useGameStore();

    if (!dialogue) return null;

 const speakerData = dialogueSpeaker
        ? NPCs[dialogueSpeaker]
        : null;

    return (
        <div style={{
            border: "2px solid #333",
            padding: "1rem",
            marginBottom: "1rem",
            display: "flex",
            gap: "1rem",
            alignItems: "flex-start",
            background: "#fff",
        }}>
            {speakerData?.image && (
                <img
                    src={speakerData.image}
                    alt={speakerData.name}
                    width={80}
                    height={80}
                    style={{ borderRadius: "8px" }}
                />
            )}

            <div style={{ flex: 1 }}>
                {speakerData?.name && (
                    <strong style={{ display: "block", marginBottom: "0.3rem" }}>
                        {speakerData.name}
                    </strong>
                )}

                <p>{dialogue[dialogueIndex]}</p>

                <button onClick={nextDialogueLine} style={{ marginTop: "0.5rem" }}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default DialogueBox
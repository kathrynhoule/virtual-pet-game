import useGameStore from "../hooks/useGameStore"
import React from 'react'

const DialogueBox = () => {
    const { dialogue, dialogueIndex, nextDialogueLine } = useGameStore();

    if (!dialogue) return null;

    return (
        <div className="dialogue-box" onClick={nextDialogueLine}>
            <p>{dialogue[dialogueIndex]}</p>
            <small>(click to continue)</small>
        </div>
    );
};

export default DialogueBox
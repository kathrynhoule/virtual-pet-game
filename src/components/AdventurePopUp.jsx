import React from "react";
import useGameStore from "../hooks/useGameStore";
import { items } from "../data/items";

//currently this just appears at the bottom of whatever screen the player is on
//will add css later so it's a proper popup

const AdventurePopUp = () => {
const {
        showAdventurePopUp,
        adventureMessages,
        adventurePopUpItems,
        closeAdventurePopUp,
    } = useGameStore();

    if (!showAdventurePopUp) return null;

    return (
        <div>
            <div>
                <h3>Your pet came back from their adventure!</h3>

                {adventureMessages.map((msg, i) => (
                <p key={i}>{msg}</p>
                ))}

                {adventurePopUpItems.length > 0 && (
                    <>
                        <h4>Items found:</h4>
                        <ul>
                        {adventurePopUpItems.map((itemId, i) => {
                            const item = items[itemId];
                            return <li key={i}>{item?.name || itemId}</li>;
                        })}
                        </ul>
                    </>
                )}

                <button onClick={closeAdventurePopUp}>OK</button>
            </div>
        </div>
    );
};

export default AdventurePopUp
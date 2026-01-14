import React from 'react'
import useGameStore from '../hooks/useGameStore';
import items from '../data/items';

const PetScreen = () => {
    const {
        pet,
        currentAdventure,
        feedPetWithItem,
        playWithPetItem,
        startRest,
        currentRest,
        setScreen,
        inventory,
    } = useGameStore();

    if (!pet) return <p>No pet selected.</p>;

    const isAdventuring = currentAdventure !== null;

    const isResting = useGameStore((s) => s.currentRest !== null);

    const edibleInventory = Object.entries(inventory.items)
    .filter(([id]) => items[id]?.edible);

    const playableInventory = Object.entries(inventory.items)
    .filter(([id]) => items[id]?.playable);

    const getStatColor = (value) => {
        if (value < 20) return "red";
        if (value < 40) return "goldenrod";
        return "black";
    };

    return (
        <div>
            <h2>{pet.name}</h2>
            <img src={pet.image} alt={pet.name} width={150} />

            {pet.status?.sick && (
                <p style={{ color: "red" }}>
                    Your pet has become sick!
                </p>
            )}

            <h3>Pet Stats</h3>
            <p style={{ color: getStatColor(pet.hunger) }}>Hunger: {pet.hunger}</p>
            <p style={{ color: getStatColor(pet.happiness) }}>Happiness: {pet.happiness}</p>
            <p style={{ color: getStatColor(pet.energy) }}>Energy: {pet.energy}</p>

            {/* shows all player pet stats for now, might change this later */}
            <p>Weird: {pet.weird}</p>
            <p>Eerie: {pet.eerie}</p>
            <p>Style: {pet.style}</p>
            <p>Grime: {pet.grime}</p>
            <p>Neon: {pet.neon}</p>
            <p>Mossy: {pet.mossy}</p>
            <p>Hot: {pet.hot}</p>
            <p>Wet: {pet.wet}</p>
            <p>Cold: {pet.cold}</p>
            <p>Mundane: {pet.mundane}</p>

            <p>Adventures Completed: {pet.adventuresCompleted}</p>

            {isAdventuring && <p>Your pet is away on an adventure!</p>}

            {isResting && <p>Your pet is resting.</p>}

            <div style={{ marginTop: '1rem' }}>
            <button onClick={() => startRest(60)} disabled={isAdventuring || isResting}>
            Rest
            </button>

                <h3>Play With Pet</h3>

                    {playableInventory.length === 0 && (
                        <p>You have no toys.</p>
                    )}

                    <ul>
                        {playableInventory.map(([id, qty]) => {
                            const item = items[id];

                            return (
                                <li key={id}>
                                    {item.name} ×{qty}
                                    <button
                                        onClick={() => playWithPetItem(id)}
                                        disabled={isAdventuring || isResting}
                                    >
                                        Play
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                <h3>Feed Your Pet</h3>

                    {edibleInventory.length === 0 && (
                        <p>You have no food items.</p>
                    )}

                    <ul>
                        {edibleInventory.map(([id, qty]) => {
                            const item = items[id];

                            return (
                                <li key={id}>
                                    {item.name} ×{qty}
                                    <button
                                        onClick={() => feedPetWithItem(id)}
                                        disabled={isAdventuring || isResting}
                                    >
                                        Feed
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
            </div>

            <hr />

            <h2>Inventory</h2>
            <p>Money: {inventory.money}</p>

            <h3>Items</h3>
            {inventory.items.length === 0 && <p>No items yet.</p>}

            <ul>
                {Object.entries(inventory.items).map(([id, qty]) => {
                    const itemData = items[id];
                    return (
                        <li key={id}>
                            {itemData ? itemData.name : `Unknown (${id})`} ×{qty}
                        </li>
                    );
                })}
            </ul>

            <div style={{ marginTop: '1rem' }}>
                <button onClick={() => setScreen("home")}>
                    Back to Room
                </button>
            </div>
        </div>
    );
}

export default PetScreen
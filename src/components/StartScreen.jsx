import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { starterPets } from '../data/pets'

const StartScreen = () => {
    const { chooseStarterPet } = useGameStore();

    return (
        <div>
            <h2>Choose Your Pet:</h2>

            {starterPets.map(pet => (
                <div key={pet.id} style={{ marginBottom: "1rem" }}>
                    <h3>{pet.name}</h3>
                    <img src={pet.image} width={120} alt={pet.name} />

                    <button onClick={() => chooseStarterPet(pet)}>
                        Select {pet.name}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default StartScreen
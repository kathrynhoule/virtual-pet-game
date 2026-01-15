import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { starterPets } from '../data/pets'
import { difficultyWeights } from '../utils/pickWeightedRandom'
import { pickWeightedRandom } from '../utils/pickWeightedRandom'
import { useMemo } from 'react'
import { NPCs } from '../data/npcs'
import DialogueBox from './DialogueBox'
import { useEffect } from 'react'

//for choosing starter pet at the beginning of the game
//probably should have called this something else
//i will definitely change the name when i work on this again later

const StartScreen = () => {
    const { chooseStarterPet, startDialogue, dialogue } = useGameStore();

    const randomStarters = useMemo(() => {
        return pickWeightedRandom(starterPets, 3, difficultyWeights);
    }, []);

    useEffect(() => {
        startDialogue(NPCs.Shopkeeper.scenes.intro);
    }, []);

    return (
        <div>
            <DialogueBox />

            {!dialogue && (
            <>
                {randomStarters.map(pet => (
                    <div key={pet.id} style={{ marginBottom: "1rem" }}>
                        <h3>{pet.name}</h3>
                        <img src={pet.image} width={120} alt={pet.name} />

                        <button onClick={() => chooseStarterPet(pet)}>
                        Select {pet.name}
                        </button>
                    </div>
                ))}
            </>
            )}
        </div>
    );
}

export default StartScreen
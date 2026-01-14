import React from 'react';
import useGameStore from '../../hooks/useGameStore';
import { getEligibleEvolutions } from '../../utils/petEvoRules';

//i gotta update this later
//maybe make it so that it goes on the lab screen so i can add some more stuff to the lab

const EvolutionSelect = () => {
    const pet = useGameStore((state) => state.pet);
    const evolvePet = useGameStore((state) => state.evolvePet);

    const { setScreen } = useGameStore();

    const available = getEligibleEvolutions(pet);

    if (!available.length) {
        return <div>
            <p>No evolutions available yet.</p>
        <br /><br />
            <button onClick={() => setScreen("home")}>Back Home</button>
        </div>;
    }

    return (
        <div>
            <h2>Choose Your Evolution</h2>

            {available.map((evo) => (
                <button key={evo.id} onClick={() => evolvePet(evo)}>
                    {evo.name}
                </button>
            ))}
        </div>
    );
};

export default EvolutionSelect;
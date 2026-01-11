import React from 'react'
import { snakeStageTwoEvolutions } from '../data/evolutions/stageTwo/snake';

//checks for eligible evolutions based on pet and pet stats
//only have snake data to test with right now

export const getEligibleEvolutions = (pet) => {
    if (!pet) return [];

    return snakeStageTwoEvolutions.filter((evo) => {
        // correct pet and correct stage
        if (evo.from !== pet.id || evo.stage !== 2) return false;

        // stat requirements
        return Object.entries(evo.requirements).every(
            ([stat, needed]) => (pet[stat] || 0) >= needed
        );
    });
};
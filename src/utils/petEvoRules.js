import React from 'react'
import { petEvolutions } from '../data/petEvos';

//needs a major overhaul

export const getEligibleEvolutions = (pet) => {
    const evolutions = petEvolutions[pet.id];
    if (!evolutions) return [];

    return evolutions.filter((evo) =>
        Object.entries(evo.requirements).every(
            ([stat, needed]) => pet[stat] >= needed
        )
    );
};
import React from 'react'

//will need a major overhaul when i change how evos are done
//but it works for now

export const determinePetStage = (pet) => {
    let newStage = pet.stage;

    //counts daytime adventures (6AM - 6PM)
    const dayAdventures = pet.adventureHistory.filter(entry => {
        const hour = new Date(entry.startTime).getHours();
        return hour >= 6 && hour < 18;
    }).length;

    //counts nighttime adventures (6PM - 6AM)
    const nightAdventures = pet.adventureHistory.filter(entry => {
        const hour = new Date(entry.startTime).getHours();
        return hour >= 18 || hour < 6;
    }).length;

    //nighttime evo has priority
    if (nightAdventures >= 3 && newStage < 2) {
        newStage = 2; //night version
    } 
    else if (dayAdventures >= 3 && newStage < 1) {
        newStage = 1; //dayversion
    }

    //will add more evo rules here later

    return newStage;
};
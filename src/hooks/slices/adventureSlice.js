import React from 'react'
import { adventureLocations } from "../../data/adventures";
import generateAdventureRewards from "../../utils/adventureRewards";
import { generateAdventureStatGains } from "../../utils/adventureStats";
import { generateStatMessages } from "../../utils/adventureStatMessages";

const createAdventureSlice = (set, get) => ({
    adventureMessages: [],
    showAdventurePopUp: false,
    adventurePopUpItems: [],
    currentAdventure: null,

    startAdventure: (location = "Forest") =>
        set((state) => {
            const locationData = adventureLocations[location];
            const duration = locationData.duration ?? 30;

            if (state.pet.hunger <= 0 || state.pet.energy <= 0) {
                return state;
            }

            return {
                currentAdventure: {
                    location: location,
                    startTime: Date.now(),
                    endTime: Date.now() + duration * 1000,
                }
            };
        }),

    endAdventure: () =>
        set((state) => {
            const currentLocation = state.currentAdventure?.location || 'Unknown';
            const locationData = adventureLocations[currentLocation];

            const newEntry = {
                startTime: state.currentAdventure?.startTime || Date.now() - 10000,
                endTime: Date.now(),
                location: currentLocation,
            };

            const statGains = generateAdventureStatGains(locationData.statEffects);
            const statMessages = generateStatMessages(statGains);

            //update pet stats
            const updatedPet = {
                ...state.pet,
                hunger: Math.max(state.pet.hunger - 10, 0),
                energy: Math.max(state.pet.energy - 15, 0),
                adventuresCompleted: state.pet.adventuresCompleted + 1,
                    adventureHistory: [...state.pet.adventureHistory, newEntry],
                ...Object.fromEntries(
                    Object.entries(statGains).map(([stat, amount]) => [
                        stat,
                        (state.pet[stat] || 0) + amount,
                    ])
                ),
            };

            //rewards
            const rewards = generateAdventureRewards(locationData);

            const updatedInventory = {
                ...state.inventory,
                money: state.inventory.money + rewards.money,
                items: rewards.items.reduce((acc, itemId) => {
                    acc[itemId] = (acc[itemId] || 0) + 1;
                    return acc;
                }, { ...state.inventory.items }),
            };

            return {
                pet: updatedPet,
                inventory: updatedInventory,
                currentAdventure: null,
                adventureMessages: statMessages,
                adventurePopUpItems: rewards.items,
                showAdventurePopUp: statMessages.length > 0 || rewards.items.length > 0,
            };
        }),
        
    //popup for when pet returns from an adventure
    openAdventurePopUp: (messages) =>
        set({
            adventureMessages: messages,
            showAdventurePopUp: true,
        }),

    closeAdventurePopUp: () =>
        set({
            adventureMessages: [],
            adventurePopUpItems: [],
            showAdventurePopUp: false,
        }),
});

export default createAdventureSlice
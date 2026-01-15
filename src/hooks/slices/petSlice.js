import React from 'react'
import items from "../../data/items";

const createPetSlice = (set) => ({

    pet: {
        status: {
            sick: false,
        },
        dangerTime: {
            hunger: 0,
            happiness: 0,
            energy: 0,
        },
    },

    currentRest: null,

    //pet actions
    feedPetWithItem: (itemId) =>
        set((state) => {
            const item = items[itemId];
            if (!item || !item.edible) return state;

            const currentQty = state.inventory.items[itemId];
            if (!currentQty || currentQty <= 0) return state;

            //apply effects
            const effects = item.eatEffects || {};

            const updatedPet = {
                ...state.pet,
                hunger: Math.min(
                    100,
                    state.pet.hunger + (effects.hunger || 0)
                ),
                happiness: Math.min(
                    100,
                    state.pet.happiness + (effects.happiness || 0)
                ),
                energy: Math.min(
                    100,
                    state.pet.energy + (effects.energy || 0)
                ),
            };

            //remove item from inventory
            const updatedItems = { ...state.inventory.items };
            if (currentQty === 1) {
                delete updatedItems[itemId];
            } 
            else {
                updatedItems[itemId] = currentQty - 1;
            }

            return {
                pet: updatedPet,
                inventory: {
                    ...state.inventory,
                    items: updatedItems,
                },
        };
    }),

    startRest: (duration = 60) =>
        set((state) => {
            if (!state.pet || state.currentAdventure || state.currentRest) {
                return state;
            }

            const start = state.gameTime;
            const end = (start + duration) % MINUTES_PER_DAY;

            return {
                currentRest: {
                    startTime: start,
                    endTime: end,
                },
            };
    }),

    playWithPetItem: (itemId) =>
        set((state) => {
            const item = items[itemId];
            if (!item || !item.playable) return state;

            const currentQty = state.inventory.items[itemId];
            if (!currentQty || currentQty <= 0) return state;

            //apply effects
            const effects = item.playEffects || {};

            const updatedPet = {
                ...state.pet,
                hunger: Math.min(
                    100,
                    state.pet.hunger + (effects.hunger || 0)
                ),
                happiness: Math.min(
                    100,
                    state.pet.happiness + (effects.happiness || 0)
                ),
                energy: Math.min(
                    100,
                    state.pet.energy + (effects.energy || 0)
                ),
            };

            //remove item from inventory
            const updatedItems = { ...state.inventory.items };
            if (currentQty === 1) {
                delete updatedItems[itemId];
            }
            else {
                updatedItems[itemId] = currentQty - 1;
            }

            return {
                pet: updatedPet,
                inventory: {
                    ...state.inventory,
                    items: updatedItems,
                },
        };
    }),

    evolvePet: (evo) =>
        set((state) => ({
            pet: {
                ...state.pet,
                id: evo.id,
                name: evo.name,
                image: evo.image,
                stage: state.pet.stage + 1,
            },
        })),

})

export default createPetSlice
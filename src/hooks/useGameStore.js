import { create } from 'zustand'
import { determinePetStage } from '../utils/petEvoRules'
import { adventureLocations } from '../data/adventures'
import generateAdventureRewards from '../utils/adventureRewards'
import { defaultInventory } from '../data/inventory'
import { items } from '../data/items'

//oh it's hell to look at right now with everything in one file
//i'll do something about that later
//also need to change the pet evolution logic later on

const useGameStore = create((set) => ({
    currentScreen: "start",

    pet: null,

    room: null,

    inventory: defaultInventory,

    setScreen: (screen) => set({ currentScreen: screen }),

    chooseStarterPet: (petInfo) =>
            set(() => ({
                pet: {
                    ...petInfo,
                    stage: 0,
                    hunger: 100,
                    happiness: 100,
                    energy: 100,
                    adventuresCompleted: 0,
                    adventureHistory: [],
                },
                currentScreen: "roomSelect",
        })),

    chooseStarterRoom: (roomId) =>
        set(() => ({
            room: roomId,
            currentScreen: "home",
    })),

    currentAdventure: null,

    decayRates: {
        hunger: 1,
        happiness: 1,
        energy: 1,
    },

    decayStats: () =>
        set((state) => ({
            pet: {
                ...state.pet,
                hunger: Math.max(state.pet.hunger - state.decayRates.hunger, 0),
                happiness: Math.max(state.pet.happiness - state.decayRates.happiness, 0),
                energy: Math.max(state.pet.energy - state.decayRates.energy, 0),
            },
        })),

    //pet actions
    feedPet: () =>
    set((state) => ({
        pet: { ...state.pet, hunger: Math.min(state.pet.hunger + 20, 100) },
    })),
    playWithPet: () =>
    set((state) => ({
        pet: { ...state.pet, happiness: Math.min(state.pet.happiness + 20, 100) },
    })),
    restPet: () =>
    set((state) => ({
        pet: { ...state.pet, energy: Math.min(state.pet.energy + 20, 100) },
    })),

    gainXP: (amount) => set((state) => ({ xp: state.xp + amount })),

    //adventures
    startAdventure: (location = "Forest") =>
        set((state) => {
            if (state.pet.hunger <= 0 || state.pet.energy <= 0) {
                return state;
            }

            return {
                currentAdventure: {
                    startTime: Date.now(),
                    endTime: Date.now() + 10000,
                    location,
                },
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

            //update pet stats
            const updatedPet = {
                ...state.pet,
                hunger: Math.max(state.pet.hunger - 10, 0),
                energy: Math.max(state.pet.energy - 15, 0),
                adventuresCompleted: state.pet.adventuresCompleted + 1,
                adventureHistory: [...state.pet.adventureHistory, newEntry],
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

            //evolve pet if applicable
            const newStage = determinePetStage(updatedPet);

            return {
                currentAdventure: null,
                pet: {
                    ...updatedPet,
                    stage: newStage,
                },
                inventory: updatedInventory,
            };
        }),
    
    purchaseItem: (itemId) =>
    set((state) => {
        const item = items[itemId];
        if (!item) return state;

        if (state.inventory.money < item.buyPrice) {
            return state;
        }

        return {
            inventory: {
                ...state.inventory,
                money: state.inventory.money - item.buyPrice,
                items: {
                    ...state.inventory.items,
                    [itemId]: (state.inventory.items[itemId] || 0) + 1,
                }
            },
        };
    }),

    sellItem: (itemId) =>
        set((state) => {
            const item = items[itemId];
            if (!item) return state;

            if (!state.inventory.items[itemId]) {
            return state;
            }

            const updatedItemCount = state.inventory.items[itemId] - 1;

            const updatedItems = { ...state.inventory.items };
            if (updatedItemCount <= 0) {
            delete updatedItems[itemId];
            } else {
            updatedItems[itemId] = updatedItemCount;
            }

            return {
            inventory: {
                ...state.inventory,
                money: state.inventory.money + item.sellPrice,
                items: updatedItems,
            },
        };
    }),
}));

export default useGameStore;
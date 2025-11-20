import { create } from 'zustand'
import { determinePetStage } from '../utils/petEvoRules';
import { adventureLocations } from '../data/adventures';

const useGameStore = create((set) => ({
    currentScreen: "home",

    setScreen: (screen) => set({ currentScreen: screen }),

    pet: {
        stage: 0,
        hunger: 100,
        happiness: 100,
        energy: 100,
        adventuresCompleted: 0,
        adventureHistory: [],
        inventory: [],
        money: 0,
    },
    xp: 0,
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
        set(() => ({
        currentAdventure: {
            startTime: Date.now(),
            endTime: Date.now() + 10000,
            location,
        },
    })),

    endAdventure: () =>
    set((state) => {
        const currentLocation = state.currentAdventure?.location || 'Unknown';
        const locationData = adventureLocations[currentLocation];

        const newEntry = {
            startTime: state.currentAdventure?.startTime || Date.now() - 10000,
            endTime: Date.now(),
            location: currentLocation,
        };

        //affect stats
        const newHunger = Math.max(state.pet.hunger - 10, 0);
        const newEnergy = Math.max(state.pet.energy - 15, 0);

        //money reward
        let earnedMoney = 0;
        if (locationData?.moneyRange) {
            const [min, max] = locationData.moneyRange;
            earnedMoney = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        //item rewards
        const earnedItems = [];
        if (locationData?.items) {
            locationData.items.forEach(item => {
                if (Math.random() < item.chance) {
                earnedItems.push(item.name);
                }
            });
        }

        const updatedPet = {
            ...state.pet,
            hunger: newHunger,
            energy: newEnergy,
            adventuresCompleted: state.pet.adventuresCompleted + 1,
            adventureHistory: [...state.pet.adventureHistory, newEntry],
            money: state.pet.money + earnedMoney,
            inventory: [...state.pet.inventory, ...earnedItems],
        };

        const newStage = determinePetStage(updatedPet);

        return {
            currentAdventure: null,
            pet: {
                ...updatedPet,
                stage: newStage,
            },
        };
    }),

    evolvePetIfEligible: () =>
    set((state) => ({
        pet: {
        ...state.pet,
        stage: determinePetStage(state.pet),
        },
    })),
}));

export default useGameStore;
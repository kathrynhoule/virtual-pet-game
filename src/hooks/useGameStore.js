import { create } from 'zustand'

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
            const newEntry = {
            startTime: state.currentAdventure?.startTime || Date.now() - 10000,
            endTime: Date.now(),
            location: state.currentAdventure?.location || "Unknown",
        };

        // new stats after adventure
        const newHunger = Math.max(state.pet.hunger - 10, 0);
        const newEnergy = Math.max(state.pet.energy - 15, 0);

        const updatedPet = {
            ...state.pet,
            hunger: newHunger,
            energy: newEnergy,
            adventuresCompleted: state.pet.adventuresCompleted + 1,
            adventureHistory: [...state.pet.adventureHistory, newEntry],
        };

        //if evolution happens
        let newStage = updatedPet.stage;
        const dayAdventures = updatedPet.adventureHistory.filter((entry) => {
        const hour = new Date(entry.startTime).getHours();
        return hour >= 6 && hour < 18;
        }).length;

        if (dayAdventures >= 3 && updatedPet.stage < 1) {
            newStage = 1;
        }

        return {
            currentAdventure: null,
            pet: {
                ...updatedPet,
                stage: newStage,
            },
        };
    }),


    evolvePetIfEligible: () =>
    set((state) => {
        const now = new Date();

        //counts adventures that start between 6AM and 6PM
        const dayAdventures = state.pet.adventureHistory.filter((entry) => {
            const hour = new Date(entry.startTime).getHours();
            return hour >= 6 && hour < 18;
        }).length;

        let newStage = state.pet.stage;

        //evolve to stage 1 if 3 daytime adventures completed
        if (dayAdventures >= 3 && state.pet.stage < 1) {
            newStage = 1;
        }

        //will add more evo rules here later

        return {
            pet: {
            ...state.pet,
            stage: newStage,
            },
        };
    }),
}));

export default useGameStore;
import { create } from 'zustand'
import { defaultInventory } from '../data/inventory'
import createTimeSlice from './slices/timeSlice'
import createPetSlice from './slices/petSlice'
import createShopSlice from './slices/shopSlice'
import createAdventureSlice from './slices/adventureSlice'
import createChooseSlice from './slices/chooseSlice'
import createDialogueSlice from './slices/dialogueSlice'

//not sure if anything else makes sense to move over to its own slice right now
//so for now i'm fine with it

const useGameStore = create((set, get) => ({
    ...createTimeSlice(set, get),
    ...createPetSlice(set, get),
    ...createShopSlice(set, get),
    ...createAdventureSlice(set, get),
    ...createChooseSlice(set, get),
    ...createDialogueSlice(set, get),

    currentScreen: "start",

    inventory: defaultInventory,

    currentLocation: null,

    setScreen: (screen) => set({ currentScreen: screen }),

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

    setLocation: (locationKey) =>
        set({
            currentLocation: locationKey,
            currentScreen: "location",
        }), 
}));

export default useGameStore;
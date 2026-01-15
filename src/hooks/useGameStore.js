import { create } from 'zustand'
import { defaultInventory } from '../data/inventory'
import createTimeSlice from './slices/timeSlice'
import createPetSlice from './slices/petSlice'
import createShopSlice from './slices/shopSlice'
import createAdventureSlice from './slices/adventureSlice'
import createChooseSlice from './slices/chooseSlice'
import createDialogueSlice from './slices/dialogueSlice'

//oh it's hell to look at right now with everything in one file
//i'll do something about that later

//coming back to this a few weeks later and it's really hard to find things
//so i definitely need to move stuff over into separate files


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

    startDialogue: (scene) =>
        set(() => ({
            dialogue: scene.lines,
            dialogueIndex: 0,
            dialogueSpeaker: scene.speaker || null,
            dialoguePersistent: scene.persistent || false,
        })),

    nextDialogueLine: () =>
        set((state) => {
            if (!state.dialogue || state.dialogueIndex >= state.dialogue.length - 1) {
                return {
                    dialogue: null,
                    dialogueIndex: 0,
                    dialoguePersistent: false,
                };
            }

            return { dialogueIndex: state.dialogueIndex + 1 };
        }),

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
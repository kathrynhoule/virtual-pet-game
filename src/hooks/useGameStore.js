import { create } from 'zustand'
import { adventureLocations } from '../data/adventures'
import generateAdventureRewards from '../utils/adventureRewards'
import { defaultInventory } from '../data/inventory'
import items from '../data/items'
import { starterRoomOptions } from '../data/rooms'
import { generateAdventureStatGains } from '../utils/adventureStats'
import { generateStatMessages } from '../utils/adventureStatMessages'
import createTimeSlice from './slices/timeSlice'
import createPetSlice from './slices/petSlice'

//oh it's hell to look at right now with everything in one file
//i'll do something about that later

//coming back to this a few weeks later and it's really hard to find things
//so i definitely need to move stuff over into separate files


const useGameStore = create((set, get) => ({
    ...createTimeSlice(set, get),
    ...createPetSlice(set, get),

    currentScreen: "start",

    room: null,

    inventory: defaultInventory,

    dialogue: null,
    dialogueIndex: 0,
    dialogueSpeaker: null,
    dialoguePersistent: false,

    adventureMessages: [],
    showAdventurePopUp: false,
    adventurePopUpItems: [],

    currentLocation: null,

    getTimeOfDay: () => {
        const t = get().gameTime;
        if (t < 6 * 60) return "night";
        if (t < 12 * 60) return "morning";
        if (t < 17 * 60) return "day";
        if (t < 20 * 60) return "evening";
        return "night";
    },

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

    chooseStarterPet: (petInfo) =>
        set(() => ({
            pet: {
                ...petInfo,
                stage: 0,
                hunger: 100,
                happiness: 100,
                energy: 100,

                status: {
                    sick: false,
                },
                dangerTime: {
                    hunger: 0,
                    happiness: 0,
                    energy: 0,
                },

                adventuresCompleted: 0,
                adventureHistory: [],
                weird: 0,
                eerie: 0,
                style: 0,
                grime: 0,
                neon: 0,
                wet: 0,
                hot: 0,
                mossy: 0,
                cold: 0,
                mundane: 0,
            },
            currentScreen: "roomSelect",
        })),

    chooseStarterRoom: (roomId) =>
        set((state) => {
            const roomData = starterRoomOptions[roomId];
            const bonuses = roomData?.statBonuses || {};

            const updatedPet = {
                ...state.pet,
                ...Object.fromEntries(
                    Object.entries(bonuses).map(([stat, amount]) => [
                        stat,
                        (state.pet[stat] || 0) + amount,
                    ])
                ),
            };

            return {
                pet: updatedPet,
                room: roomId,
                currentScreen: "home",
            };
        }),

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

    currentAdventure: null,

    currentRest: null,

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

    gainXP: (amount) => set((state) => ({ xp: state.xp + amount })),

    //adventures
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
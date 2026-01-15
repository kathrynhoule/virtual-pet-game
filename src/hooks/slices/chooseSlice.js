import React from 'react'
import { starterRoomOptions } from '../../data/rooms';

const createChooseSlice = (set, get) => ({
        room: null,

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
})

export default createChooseSlice
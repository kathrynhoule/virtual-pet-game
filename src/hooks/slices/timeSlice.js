import React from 'react'

//i gotta update this at some point
//because some of this is from so long ago and i genuinely cannot figure out what i did
//like i followed a tutorial but i'm not sure if i fully understand what's happening
//time shit really makes me feel so dumb omg

const MINUTES_PER_DAY = 24 * 60;

const RED_THRESHOLD = 20;
const SICKNESS_TIME = 5; //5 IRL minutes. i cannot figure out for the life of me why it's IRL minutes and not in-game minutes

const createTimeSlice = (set, get) => ({
    gameTime: 8 * 60,
    lastStatDecayTime: 8 * 60,

    startGameClock: () => {
        if (get()._clockStarted) return;

        const interval = setInterval(() => {
            get().advanceTime();
        }, 1000);

        set({ _clockStarted: true, _clockInterval: interval });
    },

    getTimeOfDay: () => {
        const t = get().gameTime;
        if (t < 6 * 60) return "night";
        if (t < 12 * 60) return "morning";
        if (t < 17 * 60) return "day";
        if (t < 20 * 60) return "evening";
        return "night";
    },

    advanceTime: () =>
        set((state) => {
        let next = state.gameTime + 1;
        if (next >= MINUTES_PER_DAY) next = 0;

        let newState = { gameTime: next };

        //stat decay
        const minutesPassed =
            next >= state.lastStatDecayTime
            ? next - state.lastStatDecayTime
            : MINUTES_PER_DAY - state.lastStatDecayTime + next;

        if (minutesPassed >= 60 && state.pet) {
            newState.pet = {
                ...state.pet,
                hunger: Math.max(state.pet.hunger - 2, 0),
                happiness: Math.max(state.pet.happiness - 0.5, 0),
                energy: Math.max(state.pet.energy - 1, 0),
            };
            newState.lastStatDecayTime = next;
        }

        //sickness
        if (newState.pet) {
            const dangerTime = { ...newState.pet.dangerTime };

            for (const stat of ["hunger", "happiness", "energy"]) {
                dangerTime[stat] =
                    newState.pet[stat] < RED_THRESHOLD
                    ? dangerTime[stat] + 1
                    : 0;
            }

            newState.pet = {
                ...newState.pet,
                dangerTime,
                    status: {
                        ...newState.pet.status,
                        sick: Object.values(dangerTime).some(
                        (t) => t >= SICKNESS_TIME
                        ),
                    },
            };
        }

        return newState;
        }),

    getFormattedTime: () => {
        const t = get().gameTime;
        const h = Math.floor(t / 60);
        const m = t % 60;
        return `${((h + 11) % 12) + 1}:${m.toString().padStart(2, "0")} ${
        h < 12 ? "AM" : "PM"
        }`;
    },
});


export default createTimeSlice
import React from 'react'

const TICKS_PER_MINUTE = 1;
const MINUTES_PER_DAY = 24 * 60;

const RED_THRESHOLD = 20;
const SICKNESS_TIME = 5; //5 real-life minutes


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

  advanceTime: () =>
    set((state) => {
      let next = state.gameTime + 1;
      if (next >= MINUTES_PER_DAY) next = 0;

      let newState = { gameTime: next };

      // stat decay
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

      // sickness
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
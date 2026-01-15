//generates stat gains when pet comes back from an adventure

export function generateAdventureStatGains(statEffects = {}) {
    const gains = {};

    for (const [stat, config] of Object.entries(statEffects)) {
        const roll = Math.random();
        if (roll <= (config.chance ?? 1)) {
            const min = config.min ?? 0;
            const max = config.max ?? 0;
            const amount = Math.floor(Math.random() * (max - min + 1)) + min;

            if (amount > 0) {
                gains[stat] = (gains[stat] || 0) + amount;
            }
        }
    }

    return gains;
}
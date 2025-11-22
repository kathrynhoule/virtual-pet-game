//weights for different pet difficulties to show up on pet selection screen
//may change weights later for balancing purposes
export const difficultyWeights = {
    easy: 6,
    medium: 3,
    hard: 1,
    extreme: 0.3,
};

//picks pet options from pool based on difficulty weights
export function pickWeightedRandom(pets, count, weightMap) {
    const results = [];

    const available = [...pets];

    for (let i = 0; i < count; i++) {
        const weightedPool = [];
        available.forEach((pet) => {
            const weight = weightMap[pet.difficulty] ?? 1;
            for (let w = 0; w < weight; w++) {
                weightedPool.push(pet);
            }
        });

        if (weightedPool.length === 0) break;

        const selected = weightedPool[Math.floor(Math.random() * weightedPool.length)];
        results.push(selected);

        const index = available.findIndex(p => p.id === selected.id);
        available.splice(index, 1);
    }

    return results;
}

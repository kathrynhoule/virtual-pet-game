//generates rewards for adventures based on location data
//used in useGameStore.js
//will need an update if i add a luck stat later

function generateAdventureRewards(locationData) {
    const results = {
        money: 0,
        items: [],
    };

    //for money
    const moneyData = locationData.rewards.money;
    if (Math.random() < moneyData.chance) {
        const amount =
            Math.floor(
                Math.random() * (moneyData.max - moneyData.min + 1)
            ) + moneyData.min;
        results.money = amount;
    }

    //for items
    const items = locationData.rewards.items;
    for (const item of items) {
        if (Math.random() < item.chance) {
            results.items.push(item.name);
        }
    }

    return results;
}

export default generateAdventureRewards;
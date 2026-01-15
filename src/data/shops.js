//item data is stored in items.js

//only 2 shop locations right now, but i might honestly combine these 2 into one shop
//will also definitely add other shops later (for things like rooms, etc.)

export const shopLocations = {
    General: {
        name: 'General Shop',
        unlockAt: 3,
        inventory: [
            { id: 'petFood' },
            { id: 'secondhandBall' },
            { id: 'shampoo' },
        ],
        buysCategories: [ "nature", "animal", "treasure", "collectible", "petcare", ],
    },
    Toy: {
        name: 'Toy Shop',
        unlockAt: 10,
        inventory: [
            { id: 'squeakyToy' },
            { id: 'largePlush' },
            { id: 'scratchPad' },
        ],
        buysCategories: [ "nature", "animal", "treasure", "collectible", "petcare", ],
    },
};
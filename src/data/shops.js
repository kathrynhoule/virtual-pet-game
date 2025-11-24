//will add in placeholder images and data for shopkeepers later
//don't feel like it right now
//also need a few more shops later on

//item data is stored in items.js

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
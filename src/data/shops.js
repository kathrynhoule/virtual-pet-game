//will add in placeholder images and data for shopkeepers later
//don't feel like it right now

export const shopLocations = {
    General: {
        name: 'General Shop',
        unlockAt: 3,
        inventory: [
                { name: 'Pet Food', description: 'Basic pet food. Better than going hungry', price: 30 },
                { name: 'Secondhand Ball', description: 'An old ball. Certainly wont last long.',  price: 10 },
                { name: 'Shampoo', description: 'Will get your pet clean.',  price: 40 },
            ],
    },
    Toy: {
        name: 'Toy Shop',
        unlockAt: 10,
        inventory: [
                { name: 'Squeeky Toy', description: 'Fun to play with, but easy to tear.',  price: 30 },
                { name: 'Large Plush', description: 'Woah that is huge and adorable! Sure to make a pet happy.',  price: 150 },
                { name: 'Scratch Pad', description: 'Good for pets with claws and ones who like to roughhouse.',  price: 70 },
        ],
    },
}
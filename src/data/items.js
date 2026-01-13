//all items
//should this be organized more? yah maybe
//will update item descriptions later

const items = {
    //nature items
    mushroom: {
        id: "mushroom",
        name: "Mushroom",
        description: "What looks to be a standard mushroom.",
        category: "nature",
        buyPrice: 6,
        sellPrice: 3,
        edible: true,
        eatEffects: {
            hunger: +10,
        },
        playable: false,
    },
    magicLeaf: {
        id: "magicLeaf",
        name: "Magic Leaf",
        description: "Its dew glitters.",
        category: "nature",
        buyPrice: 20,
        sellPrice: 10,
        edible: true,
        eatEffects: {
            hunger: +5,
        },
        playable: false,
    },
    shell: {
        id: "shell",
        name: "Shell",
        description: "A classic beach souvenir.",
        category: "nature",
        buyPrice: 10,
        sellPrice: 5,
        edible: false,
        playable: false,
    },
    fruit: {
        id: "fruit",
        name: "Fruit",
        description: "Fresh and juicy.",
        category: "nature",
        buyPrice: 8,
        sellPrice: 4,
        edible: true,
        eatEffects: {
            hunger: +10,
        },
        playable: false,
    },
    seaweed: {
        id: "seaweed",
        name: "Seaweed",
        description: "Slippery and salty.",
        category: "nature",
        buyPrice: 4,
        sellPrice: 2,
        edible: true,
        eatEffects: {
            hunger: +5,
        },
        playable: false,
    },

    //animal parts
    batWing: {
        id: "batWing",
        name: "Bat Wing",
        description: "Spooky!",
        category: "animal",
        buyPrice: 16,
        sellPrice: 8,
        edible: true,
        eatEffects: {
            hunger: +5,
        },
        playable: false,
    },
    fish: {
        id: "fish",
        name: "Fish",
        description: "Nice catch!",
        category: "animal",
        buyPrice: 14,
        sellPrice: 7,
        edible: true,
        eatEffects: {
            hunger: +15,
        },
        playable: false,
    },
    dragonBones: {
        id: "dragonBones",
        name: "Dragon Bones",
        description: "Ancient and powerful.",
        category: "animal",
        buyPrice: 1000,
        sellPrice: 500,
        edible: true,
        eatEffects: {
            hunger: +5,
        },
        playable: false,
    },
    maidenRemains: {
        id: "maidenRemains",
        name: "Maiden Remains",
        description: "Damn...RIP.",
        category: "animal",
        buyPrice: 600,
        sellPrice: 300,
        edible: true,
        eatEffects: {
            hunger: +20,
        },
        playable: false,
    },

    //treasures
    sparklyGem: {
        id: "sparklyGem",
        name: "Sparkly Gem",
        description: "Ooo shiny!",
        category: "treasure",
        buyPrice: 50,
        sellPrice: 25,
        edible: false,
        playable: false,
    },
    fossil: {
        id: "fossil",
        name: "Fossil",
        description: "Damn that's old.",
        category: "treasure",
        buyPrice: 60,
        sellPrice: 30,
        edible: false,
        playable: false,
    },
    lostTreasure: {
        id: "lostTreasure",
        name: "Lost Treasure",
        description: "Valuable and mysterious.",
        category: "treasure",
        buyPrice: 400,
        sellPrice: 200,
        edible: false,
        playable: false,
    },
    iceCrystal: {
        id: "iceCrystal",
        name: "Ice Crystal",
        description: "Cold to the touch.",
        category: "treasure",
        buyPrice: 44,
        sellPrice: 22,
        edible: false,
        playable: false,
    },
    starPiece: {
        id: "starPiece",
        name: "Star Piece",
        description: "Shines with a cosmic light.",
        category: "treasure",
        buyPrice: 300,
        sellPrice: 150,
        edible: true,
        eatEffects: {
            hunger: +5,
        },
        playable: false,
    },
    ring: {
        id: "ring",
        name: "Ring",
        description: "Looks expensive.",
        category: "treasure",
        buyPrice: 200,
        sellPrice: 100,
        edible: false,
        playable: false,
    },

    //lab items
    unusedNeedle: {
        id: "unusedNeedle",
        name: "Unused Needle",
        description: "Sterile and sharp.",
        category: "lab",
        buyPrice: 30,
        sellPrice: 15,
        edible: false,
        playable: false,
    },
    bloodSample: {
        id: "bloodSample",
        name: "Blood Sample",
        description: "Handle with care.",
        category: "lab",
        buyPrice: 40,
        sellPrice: 20,
        edible: true,
        eatEffects: {
            hunger: +2,
        },
        playable: false,
    },

    //questionable items
    littleGuy: {
        id: "littleGuy",
        name: "Little Guy",
        description: "A tiny creature from the sea...probably.",
        category: "questionable",
        buyPrice: 100,
        sellPrice: 50,
        edible: true,
        eatEffects: {
            hunger: +10,
        },
        playable: true,
        playEffects: {
            happiness: +10,
        }
    },
    strangeTooth: {
        id: "strangeTooth",
        name: "Strange Tooth",
        description: "Not sure what creature this came from.",
        category: "questionable",
        buyPrice: 80,
        sellPrice: 40,
        edible: false,
        playable: false,
    },
    frozenSoul: {
        id: "frozenSoul",
        name: "Frozen Soul",
        description: "Eerie and captivating.",
        category: "questionable",
        buyPrice: 160,
        sellPrice: 80,
        edible: true,
        eatEffects: {
            hunger: +0,
        },
        playable: true,
        playEffects: {
            happiness: +15,
        }
    },
    ungoodEgg: {
        id: "ungoodEgg",
        name: "Ungood Egg",
        description: "Definitely not a good egg.",
        category: "questionable",
        buyPrice: 180,
        sellPrice: 90,
        edible: false,
        playable: false,
    },

    //collectibles
    punchcardSticker: {
        id: "punchcardSticker",
        name: "Punchcard Sticker",
        description: "Collect all 10 for a free item!",
        category: "collectible",
        buyPrice: 24,
        sellPrice: 12,
        edible: false,
        playable: false,
    },

    //pet care items
    petFood: {
        id: "petFood",
        name: "Pet Food",
        description: "Basic pet food. Better than going hungry.",
        category: "petcare",
        buyPrice: 30,
        sellPrice: 15,
        edible: true,
        eatEffects: {
            hunger: +15,
        },
        playable: false,
    },
    secondhandBall: {
        id: "secondhandBall",
        name: "Secondhand Ball",
        description: "An old ball. Certainly won't last long.",
        category: "petcare",
        buyPrice: 10,
        sellPrice: 5,
        edible: false,
        playable: true,
        playEffects: {
            happiness: +10,
        }
    },
    brush: {
        id: "brush",
        name: "Brush",
        description: "Good for grooming your pet.",
        category: "petcare",
        buyPrice: 50,
        sellPrice: 25,
        edible: false,
        playable: false,
    },
    shampoo: {
        id: "shampoo",
        name: "Shampoo",
        description: "Will get your pet clean.",
        category: "petcare",
        buyPrice: 40,
        sellPrice: 20,
        edible: false,
        playable: false,
    },
    squeakyToy: {
        id: "squeakyToy",
        name: "Squeaky Toy",
        description: "Fun but easily torn.",
        category: "petcare",
        buyPrice: 30,
        sellPrice: 15,
        edible: false,
        playable: true,
        playEffects: {
            happiness: +10,
        }
    },
    largePlush: {
        id: "largePlush",
        name: "Large Plush",
        description: "Huge and adorable! Sure to make a pet happy.",
        category: "petcare",
        buyPrice: 150,
        sellPrice: 75,
        edible: false,
        playable: true,
        playEffects: {
            happiness: +25,
        }
    },
    scratchPad: {
        id: "scratchPad",
        name: "Scratch Pad",
        description: "Good for pets with claws and ones who like to roughhouse.",
        category: "petcare",
        buyPrice: 70,
        sellPrice: 35,
        edible: false,
        playable: true,
        playEffects: {
            happiness: +15,
        }
    },
};

export default items;
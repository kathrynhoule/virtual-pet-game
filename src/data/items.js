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
        effects: {
            hunger: +10,
        }
    },
    magicLeaf: {
        id: "magicLeaf",
        name: "Magic Leaf",
        description: "Its dew glitters.",
        category: "nature",
        buyPrice: 20,
        sellPrice: 10,
        edible: true,
        effects: {
            hunger: +5,
        }
    },
    shell: {
        id: "shell",
        name: "Shell",
        description: "A classic beach souvenir.",
        category: "nature",
        buyPrice: 10,
        sellPrice: 5,
        edible: false,
    },
    fruit: {
        id: "fruit",
        name: "Fruit",
        description: "Fresh and juicy.",
        category: "nature",
        buyPrice: 8,
        sellPrice: 4,
        edible: true,
        effects: {
            hunger: +10,
        }
    },
    seaweed: {
        id: "seaweed",
        name: "Seaweed",
        description: "Slippery and salty.",
        category: "nature",
        buyPrice: 4,
        sellPrice: 2,
        edible: true,
        effects: {
            hunger: +5,
        }
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
        effects: {
            hunger: +5,
        }
    },
    fish: {
        id: "fish",
        name: "Fish",
        description: "Nice catch!",
        category: "animal",
        buyPrice: 14,
        sellPrice: 7,
        edible: true,
        effects: {
            hunger: +15,
        }
    },
    dragonBones: {
        id: "dragonBones",
        name: "Dragon Bones",
        description: "Ancient and powerful.",
        category: "animal",
        buyPrice: 1000,
        sellPrice: 500,
        edible: true,
        effects: {
            hunger: +5,
        }
    },
    maidenRemains: {
        id: "maidenRemains",
        name: "Maiden Remains",
        description: "Damn...RIP.",
        category: "animal",
        buyPrice: 600,
        sellPrice: 300,
        edible: true,
        effects: {
            hunger: +20,
        },
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
    },
    fossil: {
        id: "fossil",
        name: "Fossil",
        description: "Damn that's old.",
        category: "treasure",
        buyPrice: 60,
        sellPrice: 30,
        edible: false,
    },
    lostTreasure: {
        id: "lostTreasure",
        name: "Lost Treasure",
        description: "Valuable and mysterious.",
        category: "treasure",
        buyPrice: 400,
        sellPrice: 200,
        edible: false,
    },
    iceCrystal: {
        id: "iceCrystal",
        name: "Ice Crystal",
        description: "Cold to the touch.",
        category: "treasure",
        buyPrice: 44,
        sellPrice: 22,
        edible: false,
    },
    starPiece: {
        id: "starPiece",
        name: "Star Piece",
        description: "Shines with a cosmic light.",
        category: "treasure",
        buyPrice: 300,
        sellPrice: 150,
        edible: true,
        effects: {
            hunger: +5,
        }
    },
    ring: {
        id: "ring",
        name: "Ring",
        description: "Looks expensive.",
        category: "treasure",
        buyPrice: 200,
        sellPrice: 100,
        edible: false,
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
    },
    bloodSample: {
        id: "bloodSample",
        name: "Blood Sample",
        description: "Handle with care.",
        category: "lab",
        buyPrice: 40,
        sellPrice: 20,
        edible: true,
        effects: {
            hunger: +2,
        },
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
        effects: {
            hunger: +10,
        },
    },
    strangeTooth: {
        id: "strangeTooth",
        name: "Strange Tooth",
        description: "Not sure what creature this came from.",
        category: "questionable",
        buyPrice: 80,
        sellPrice: 40,
        edible: false,
    },
    frozenSoul: {
        id: "frozenSoul",
        name: "Frozen Soul",
        description: "Eerie and captivating.",
        category: "questionable",
        buyPrice: 160,
        sellPrice: 80,
        edible: true,
        effects: {
            hunger: +0,
        },
    },
    ungoodEgg: {
        id: "ungoodEgg",
        name: "Ungood Egg",
        description: "Definitely not a good egg.",
        category: "questionable",
        buyPrice: 180,
        sellPrice: 90,
        edible: false,
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
        effects: {
            hunger: +15,
        },
    },
    secondhandBall: {
        id: "secondhandBall",
        name: "Secondhand Ball",
        description: "An old ball. Certainly won't last long.",
        category: "petcare",
        buyPrice: 10,
        sellPrice: 5,
        edible: false,
    },
    brush: {
        id: "brush",
        name: "Brush",
        description: "Good for grooming your pet.",
        category: "petcare",
        buyPrice: 50,
        sellPrice: 25,
        edible: false,
    },
    shampoo: {
        id: "shampoo",
        name: "Shampoo",
        description: "Will get your pet clean.",
        category: "petcare",
        buyPrice: 40,
        sellPrice: 20,
        edible: false,
    },
    squeakyToy: {
        id: "squeakyToy",
        name: "Squeaky Toy",
        description: "Fun but easily torn.",
        category: "petcare",
        buyPrice: 30,
        sellPrice: 15,
        edible: false,
    },
    largePlush: {
        id: "largePlush",
        name: "Large Plush",
        description: "Huge and adorable! Sure to make a pet happy.",
        category: "petcare",
        buyPrice: 150,
        sellPrice: 75,
        edible: false,
    },
    scratchPad: {
        id: "scratchPad",
        name: "Scratch Pad",
        description: "Good for pets with claws and ones who like to roughhouse.",
        category: "petcare",
        buyPrice: 70,
        sellPrice: 35,
        edible: false,
    },
};

export default items;
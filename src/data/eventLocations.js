//i don't think i've actually used this for anything yet
//but i will eventually

export const eventLocations = {
    EvolutionLab: {
        name: 'Evolution Lab',
        description: 'A high-tech laboratory where pets can evolve to new stages.',
        image: null,

        npcs: [],
        interactables: [],
        events: [],
    },

    BulletinBoard: {
        name: 'Bulletin Board',
        description: 'A board full of notes, rumors, events, and random posts.',
        image: null,

        notes: {
            rumors: [],
            upcomingEvents: [],
            tips: [],
            worldBuilding: [],
            missingPets: [],
            npcNotes: [],
        },

        generators: {
            generateRandomNote: null,
        },

        npcs: [],
        events: [],
    },

    Woods: {
        name: 'Woods',
        description: 'A quiet trail where you can forage. People often lose things here, too...',
        image: null,

        npcs: [],
        interactables: [],
        events: [],
        possibleItems: [],
        randomEvents: [],
    },

    Dock: {
        name: 'Dock',
        description: 'A pier looking out over the water. Ships come by often.',
        image: null,

        npcs: [],
        interactables: [],
        events: [],
    },

    AbandonedHouse: {
        name: 'Abandoned House',
        description: 'A creeky old house. Seems no one has lived here for a while...',
        image: null,

        npcs: [],
        events: [],
        interactables: [],
    },
};
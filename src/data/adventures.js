import forestImg from '../assets/locations/Forest.png';
import caveImg from '../assets/locations/Cave.png';
import beachImg from '../assets/locations/Beach.png';
import cityImg from '../assets/locations/City.png';
import desertImg from '../assets/locations/Desert.png';
import labImg from '../assets/locations/Lab.png';
import parlorImg from '../assets/locations/Parlor.png';
import seafloorImg from '../assets/locations/Seafloor.png';
import snowImg from '../assets/locations/Snow.png';
import spaceImg from '../assets/locations/Space.png';
import volcanoImg from '../assets/locations/Volcano.png';

//data for adventure locations
//might add more items and details later
//will likely make adventures add stat points to pets

//item details are stored in items.js
//durations for adventures are in seconds

export const adventureLocations = {
    Forest: {
        name: 'Forest',
        image: forestImg,
        description: 'Placeholder description',
        unlockAt: 0,
        duration: 30, //0.5 minutes
        rewards: {
            money: { min: 2, max: 9, chance: 1.0 },
            items: [
                { id: 'mushroom', chance: 0.5 },
                { id: 'magicLeaf', chance: 0.1 },
            ],
        },
        statEffects: {
            mossy: { min: 1, max: 5, chance: 1.0 },
            grime: { min: 1, max: 2, chance: 0.6 },
            mundane: { min: 1, max: 2, chance: 0.5 },
            eerie: { min: 1, max: 2, chance: 0.3 },
            cold: { min: 0, max: 1, chance: 0.4},
        },
    },
    Cave: {
        name: 'Cave',
        image: caveImg,
        description: 'Placeholder description',
        unlockAt: 5,
        duration: 90, //1.5 minutes
        rewards: {
            money: { min: 10, max: 20, chance: 0.8 },
            items: [
                { id: 'batWing', chance: 0.3 },
                { id: 'sparklyGem', chance: 0.1 },
            ],
        },
        statEffects: {
            grime: { min: 1, max: 5, chance: 1.0 },
            eerie: { min: 1, max: 2, chance: 0.5 },
            mossy: { min: 0, max: 2, chance: 0.4 },
            wet: { min: 0, max: 2, chance: 0.3},
            cold: { min: 0, max: 2, chance: 0.2},
        },
    },
    Beach: {
        name: 'Beach',
        image: beachImg,
        description: 'Placeholder description',
        unlockAt: 5,
        duration: 60, //1 minute
        rewards: {
            money: { min: 5, max: 20, chance: 0.6 },
            items: [
                { id: 'shell', chance: 0.8 },
                { id: 'fish', chance: 0.3 },
                { id: 'littleGuy', chance: 0.05 },
            ],
        },
        statEffects: {
            wet: { min: 2, max: 5, chance: 0.8 },
            hot: { min: 1, max: 3, chance: 0.5 },
            style: { min: 1, max: 2, chance: 0.4},
            mundane: { min: 1, max: 2, chance: 0.4},
        },
    },
    City: {
        name: 'City',
        image: cityImg,
        description: 'Placeholder description',
        unlockAt: 20,
        duration: 180, //3 minutes
        rewards: {
            money: { min: 20, max: 40, chance: 0.9 },
            items: [
                { id: 'punchcardSticker', chance: 0.4 },
                { id: 'ring', chance: 0.05 },
            ],
        },
        statEffects: {
            style: { min: 2, max: 6, chance: 1.0 },
            grime: { min: 1, max: 3, chance: 1.0 },
            weird: { min: 1, max: 3, chance: 0.8 },
            mundane: { min: 1, max: 3, chance: 0.6 },
            cold: { min: 1, max: 3, chance: 0.5 },
            neon: { min: 1, max: 2, chance: 0.4 },
            wet: { min: 0, max: 1, chance: 0.5 },
        },
    },
    Desert: {
        name: 'Desert',
        image: desertImg,
        description: 'Placeholder description',
        unlockAt: 20,
        duration: 180, //3 minutes
        rewards: {
            money: { min: 10, max: 40, chance: 0.6 },
            items: [
                { id: 'fruit', chance: 0.4 },
                { id: 'fossil', chance: 0.05 },
            ],
        },
        statEffects: {
            hot: { min: 4, max: 10, chance: 1.0 },
            cold: { min: 1, max: 4, chance: 0.3 },
            grime: { min: 1, max: 3, chance: 0.8 },
            style: { min: 0, max: 2, chance: 0.3 },
        },
    },
    Lab: {
        name: 'Lab',
        image: labImg,
        description: 'Placeholder description',
        unlockAt: 40,
        duration: 240, //4 minutes
        rewards: {
            money: { min: 1, max: 10, chance: 0.7 },
            items: [
                { id: 'unusedNeedle', chance: 0.5 },
                { id: 'bloodSample', chance: 0.1 },
            ],
        },
        statEffects: {
            eerie: { min: 3, max: 10, chance: 1.0 },
            neon: { min: 3, max: 7, chance: 0.1 },
            weird: { min: 2, max: 5, chance: 0.9 },
            cold: { min: 2, max: 5, chance: 0.5 },
            grime: { min: 1, max: 2, chance: 0.4 },
        },
    },
    Parlor: {
        name: 'Parlor',
        image: parlorImg,
        description: 'Placeholder description',
        unlockAt: 40,
        duration: 300, //5 minutes
        rewards: {
            money: { min: 10, max: 25, chance: 0.7 },
            items: [
                { id: 'ribbon', chance: 0.5 },
                { id: 'brush', chance: 0.3 },
            ],
        },
        statEffects: {
            style: { min: 8, max: 15, chance: 1.0 },
            weird: { min: 3, max: 7, chance: 0.4 },
            mundane: { min: 1, max: 5, chance: 0.5 },
            neon: { min: 1, max: 5, chance: 0.3 },
            hot: { min: 1, max: 5, chance: 0.2 },
        },
    },
    Seafloor: {
        name: 'Seafloor',
        image: seafloorImg,
        description: 'Placeholder description',
        unlockAt: 75,
        duration: 420, //7 minutes
        rewards: {
            money: { min: 20, max: 50, chance: 0.5 },
            items: [
                { id: 'seaweed', chance: 1.0 },
                { id: 'strangeTooth', chance: 0.05 },
                { id: 'lostTreasure', chance: 0.01 },
            ],
        },
        statEffects: {
            wet: { min: 10, max: 20, chance: 1.0 },
            cold: { min: 5, max: 8, chance: 0.7 },
            eerie: { min: 5, max: 7, chance: 0.2 },
            weird: { min: 3, max: 10, chance: 0.1 },
            mossy: { min: 3, max: 6, chance: 0.4 },
        },
    },
    Snow: {
        name: 'Snow',
        image: snowImg,
        description: 'Placeholder description',
        unlockAt: 75,
        duration: 300, //5 minutes
        rewards: {
            money: { min: 2, max: 8, chance: 0.5 },
            items: [
                { id: 'iceCrystal', chance: 0.3 },
                { id: 'frozenSoul', chance: 0.05 },
            ],
        },
        statEffects: {
            cold: { min: 10, max: 25, chance: 1.0 },
            wet: { min: 3, max: 10, chance: 0.6 },
            eerie: { min: 5, max: 8, chance: 0.1 },
            style: { min: 1, max: 3, chance: 0.1 },
            hot: { min: 0, max: 2, chance: 0.3 },
        },
    },
    Space: {
        name: 'Space',
        image: spaceImg,
        description: 'Placeholder description',
        unlockAt: 100,
        duration: 600, //10 minutes
        rewards: {
            money: { min: 2, max: 8, chance: 0.4 },
            items: [
                { id: 'starPiece', chance: 0.1 },
                { id: 'ungoodEgg', chance: 0.01 },
            ],
        },
        statEffects: {
            weird: { min: 15, max: 20, chance: 1.0 },
            eerie: { min: 10, max: 15, chance: 0.4 },
            cold: { min: 5, max: 10, chance: 0.8},
            neon: { min: 3, max: 6, chance: 0.3 },
        },
    },
    Volcano: {
        name: 'Volcano',
        image: volcanoImg,
        description: 'Placeholder description',
        unlockAt: 100,
        duration: 420, //7 minutes
        rewards: {
            money: { min: 5, max: 25, chance: 0.9 },
            items: [
                { id: 'maidenRemains', chance: 0.1 },
                { id: 'dragonBones', chance: 0.03 },
            ],
        },
        statEffects: {
            hot: { min: 5, max: 15, chance: 1.0 },
            eerie: { min: 5, max: 15, chance: 0.8 },
            cold: { min: 5, max: 10, chance: 0.5 },
            mossy: { min: 3, max: 8, chance: 0.3 },
            grime: { min: 2, max: 5, chance: 0.3 },
        },
    },
};
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

export const adventureLocations = {
    Forest: {
        name: 'Forest',
        image: forestImg,
        description: 'Placeholder description',
        unlockAt: 0,
        rewards: {
            money: { min: 2, max: 9, chance: 1.0 },
            items: [
                { id: 'mushroom', chance: 0.5 },
                { id: 'magicLeaf', chance: 0.1 },
            ],
        },
    },
    Cave: {
        name: 'Cave',
        image: caveImg,
        description: 'Placeholder description',
        unlockAt: 5,
        rewards: {
            money: { min: 10, max: 20, chance: 0.8 },
            items: [
                { id: 'batWing', chance: 0.3 },
                { id: 'sparklyGem', chance: 0.1 },
            ],
        },
    },
    Beach: {
        name: 'Beach',
        image: beachImg,
        description: 'Placeholder description',
        unlockAt: 5,
        rewards: {
            money: { min: 5, max: 20, chance: 0.6 },
            items: [
                { id: 'shell', chance: 0.8 },
                { id: 'fish', chance: 0.3 },
                { id: 'littleGuy', chance: 0.05 },
            ],
        },
    },
    City: {
        name: 'City',
        image: cityImg,
        description: 'Placeholder description',
        unlockAt: 20,
        rewards: {
            money: { min: 20, max: 40, chance: 0.9 },
            items: [
                { id: 'punchcardSticker', chance: 0.4 },
                { id: 'ring', chance: 0.05 },
            ],
        },
    },
    Desert: {
        name: 'Desert',
        image: desertImg,
        description: 'Placeholder description',
        unlockAt: 20,
        rewards: {
            money: { min: 10, max: 40, chance: 0.6 },
            items: [
                { id: 'fruit', chance: 0.4 },
                { id: 'fossil', chance: 0.05 },
            ],
        },
    },
    Lab: {
        name: 'Lab',
        image: labImg,
        description: 'Placeholder description',
        unlockAt: 40,
        rewards: {
            money: { min: 1, max: 10, chance: 0.7 },
            items: [
                { id: 'unusedNeedle', chance: 0.5 },
                { id: 'bloodSample', chance: 0.1 },
            ],
        },
    },
    Parlor: {
        name: 'Parlor',
        image: parlorImg,
        description: 'Placeholder description',
        unlockAt: 40,
        rewards: {
            money: { min: 10, max: 25, chance: 0.7 },
            items: [
                { id: 'ribbon', chance: 0.5 },
                { id: 'brush', chance: 0.3 },
            ],
        },
    },
    Seafloor: {
        name: 'Seafloor',
        image: seafloorImg,
        description: 'Placeholder description',
        unlockAt: 75,
        rewards: {
            money: { min: 20, max: 50, chance: 0.5 },
            items: [
                { id: 'seaweed', chance: 1.0 },
                { id: 'strangeTooth', chance: 0.05 },
                { id: 'lostTreasure', chance: 0.01 },
            ],
        },
    },
    Snow: {
        name: 'Snow',
        image: snowImg,
        description: 'Placeholder description',
        unlockAt: 75,
        rewards: {
            money: { min: 2, max: 8, chance: 0.5 },
            items: [
                { id: 'iceCrystal', chance: 0.3 },
                { id: 'frozenSoul', chance: 0.05 },
            ],
        },
    },
    Space: {
        name: 'Space',
        image: spaceImg,
        description: 'Placeholder description',
        unlockAt: 100,
        rewards: {
            money: { min: 2, max: 8, chance: 0.4 },
            items: [
                { id: 'starPiece', chance: 0.1 },
                { id: 'ungoodEgg', chance: 0.01 },
            ],
        },
    },
    Volcano: {
        name: 'Volcano',
        image: volcanoImg,
        description: 'Placeholder description',
        unlockAt: 100,
        rewards: {
            money: { min: 5, max: 25, chance: 0.9 },
            items: [
                { id: 'maidenRemains', chance: 0.1 },
                { id: 'dragonBones', chance: 0.03 },
            ],
        },
    },
};
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
//minimal for now, will expand later
//might add more items
//might add events for the locations as well

export const adventureLocations = {
    Forest: {
        name: 'Forest',
        image: forestImg,
        description: 'Placeholder description',
        unlockAt: 0,
        rewards: {
            money: { min: 2, max: 9, chance: 1.0 },
            items: [
                { name: 'Mushroom', chance: 0.5 },
                { name: 'Magic Leaf', chance: 0.1 },
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
                { name: 'Bat Wing', chance: 0.3 },
                { name: 'Sparkly Gem', chance: 0.1 },
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
                { name: 'Shell', chance: 0.8 },
                { name: 'Fish', chance: 0.3 },
                { name: 'Little Guy', chance: 0.05 },
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
                { name: 'Punchcard Sticker', chance: 0.4 },
                { name: 'Ring', chance: 0.05 },
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
                { name: 'Fruit', chance: 0.4 },
                { name: 'Fossil', chance: 0.05 },
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
                { name: 'Unused Needle', chance: 0.5 },
                { name: 'Blood Sample', chance: 0.1 },
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
                { name: 'Ribbon', chance: 0.5 },
                { name: 'Brush', chance: 0.3 },
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
                { name: 'Seaweed', chance: 1.0 },
                { name: 'Strange Tooth', chance: 0.05 },
                { name: 'Lost Treasure', chance: 0.01 },
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
                { name: 'Ice Crystal', chance: 0.3 },
                { name: 'Frozen Soul', chance: 0.05 },
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
                { name: 'Star Piece', chance: 0.1 },
                { name: 'Ungood Egg', chance: 0.01 },
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
                { name: 'Maiden Remains', chance: 0.1 },
                { name: 'Dragon Bones', chance: 0.03 },
            ],
        },
    },
};
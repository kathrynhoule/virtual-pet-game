import forestImg from '../assets/Forest.png';
import caveImg from '../assets/Cave.png';
import beachImg from '../assets/Beach.png';
import cityImg from '../assets/City.png';
import desertImg from '../assets/Desert.png';
import labImg from '../assets/Lab.png';
import parlorImg from '../assets/Parlor.png';
import seafloorImg from '../assets/Seafloor.png';
import snowImg from '../assets/Snow.png';
import spaceImg from '../assets/Space.png';
import volcanoImg from '../assets/Volcano.png';

export const adventureLocations = {
    Forest: {
        name: 'Forest',
        image: forestImg,
        description: 'Placeholder description',
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
        rewards: {
            money: { min: 5, max: 25, chance: 0.9 },
            items: [
                { name: 'Maiden Remains', chance: 0.1 },
                { name: 'Dragon Bones', chance: 0.03 },
            ],
        },
    },
};
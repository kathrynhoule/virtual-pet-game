import basePetImg from '../assets/pets/base-sprite.png'
import dayPetImg from '../assets/pets/day-sprite.png'
import nightPetImg from '../assets/pets/night-sprite.png'

//starter pet image imports
import bunnyPetImg from '../assets/pets/bunny-pet.png'
import catPetImg from '../assets/pets/cat-pet.png'
import dogPetImg from '../assets/pets/dog-pet.png'
import lizardPetImg from '../assets/pets/lizard-pet.png'
import ghostPetImg from '../assets/pets/ghost-pet.png'
import virusPetImg from '../assets/pets/virus-pet.png'
import snakePetImg from '../assets/pets/snake-pet.png'
import birdPetImg from '../assets/pets/bird-pet.png'
import rockPetImg from '../assets/pets/rock-pet.png'
import plantPetImg from '../assets/pets/plant-pet.png'
import fishPetImg from '../assets/pets/fish-pet.png'
import bugPetImg from '../assets/pets/bug-pet.png'
import alienPetImg from '../assets/pets/alien-pet.png'
import horsePetImg from '../assets/pets/horse-pet.png'
import guyPetImg from '../assets/pets/guy-pet.png'
import galPetImg from '../assets/pets/gal-pet.png'

//data for pet stages and their images
//this is going to need a lot of expansion later as more base pets and evolutions are added
//will also need to add more evo rules later
//that's for future me to worry about

export const starterPets = [
    {
        id: "bunny",
        name: "Bunny Pet",
        image: bunnyPetImg,
        difficulty: "medium",
    },
    {
        id: "cat",
        name: "Cat Pet",
        image: catPetImg,
        difficulty: "medium",
    },
    {
        id: "dog",
        name: "Dog Pet",
        image: dogPetImg,
        difficulty: "medium",
    },
        {
        id: "lizard",
        name: "Lizard Pet",
        image: lizardPetImg,
        difficulty: "hard",
    },
    {
        id: "ghost",
        name: "Ghost Pet",
        image: ghostPetImg,
        difficulty: "easy",
    },
    {
        id: "virus",
        name: "Virus Pet",
        image: virusPetImg,
        difficulty: "extreme",
    },
        {
        id: "snake",
        name: "Snake Pet",
        image: snakePetImg,
        difficulty: "medium",
    },
    {
        id: "bird",
        name: "Bird Pet",
        image: birdPetImg,
        difficulty: "medium",
    },
    {
        id: "rock",
        name: "Rock Pet",
        image:  rockPetImg,
        difficulty: "easy",
    },
        {
        id: "plant",
        name: "Plant Pet",
        image: plantPetImg,
        difficulty: "easy",
    },
    {
        id: "fish",
        name: "Fish Pet",
        image:  fishPetImg,
        difficulty: "medium",
    },
    {
        id: "bug",
        name: "Bug Pet",
        image: bugPetImg,
        difficulty: "easy",
    },
        {
        id: "alien",
        name: "Alien Pet",
        image:  alienPetImg,
        difficulty: "extreme",
    },
        {
        id: "horse",
        name: "Horse Pet",
        image: horsePetImg,
        difficulty: "medium",
    },
    {
        id: "Guy",
        name: "Guy Pet",
        image:  guyPetImg,
        difficulty: "hard",
    },
    {
        id: "Gal",
        name: "Gal Pet",
        image: galPetImg,
        difficulty: "hard",
    },
];


export const petStages = {
    0: {
        name: 'Base Pet',
        image: basePetImg,
    },
    1: {
        name: 'Daytime Evolution',
        image: dayPetImg,
    },
    2: {
        name: 'Nighttime Evolution',
        image: nightPetImg,
    },
};
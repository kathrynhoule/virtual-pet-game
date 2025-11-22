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
    },
    {
        id: "cat",
        name: "Cat Pet",
        image: catPetImg,
    },
    {
        id: "dog",
        name: "Dog Pet",
        image: dogPetImg,
    },
        {
        id: "lizard",
        name: "Lizard Pet",
        image: lizardPetImg,
    },
    {
        id: "ghost",
        name: "Ghost Pet",
        image: ghostPetImg,
    },
    {
        id: "virus",
        name: "Virus Pet",
        image: virusPetImg,
    },
        {
        id: "snake",
        name: "Snake Pet",
        image: snakePetImg,
    },
    {
        id: "bird",
        name: "Bird Pet",
        image: birdPetImg,
    },
    {
        id: "rock",
        name: "Rock Pet",
        image:  rockPetImg,
    },
        {
        id: "plant",
        name: "Plant Pet",
        image: plantPetImg,
    },
    {
        id: "fish",
        name: "Fish Pet",
        image:  fishPetImg,
    },
    {
        id: "bug",
        name: "Bug Pet",
        image: bugPetImg,
    },
        {
        id: "alien",
        name: "Alien Pet",
        image:  alienPetImg,
    },
        {
        id: "horse",
        name: "Horse Pet",
        image: horsePetImg,
    },
    {
        id: "Guy",
        name: "Guy Pet",
        image:  guyPetImg,
    },
    {
        id: "Gal",
        name: "Gal Pet",
        image: galPetImg,
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
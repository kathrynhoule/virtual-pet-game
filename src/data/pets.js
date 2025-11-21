import basePetImg from '../assets/pets/base-sprite.png'
import dayPetImg from '../assets/pets/day-sprite.png'
import nightPetImg from '../assets/pets/night-sprite.png'

//data for pet stages and their images
//this is going to need a lot of expansion later as more base pets and evolutions are added
//will also need to add more evo rules later
//that's for future me to worry about

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
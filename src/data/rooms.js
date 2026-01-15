//placeholder images
import oldRoomImg from '../assets/locations/rooms/old-room.png'
import pinkRoomImg from '../assets/locations/rooms/pink-room.png'
import simpleRoomImg from '../assets/locations/rooms/simple-room.png'
import cozyRoomImg from '../assets/locations/rooms/cozy-room.png'
import coolRoomImg from '../assets/locations/rooms/cool-room.png'
import strangeRoomImg from '../assets/locations/rooms/strange-room.png'

//data for starter room options and their images

//this is just data for the starter rooms
//i might not keep all of these starter room options, since some feel a little redundant
//might try to narrow it down to just 4 instead of 6

//at some point i also need to add data (probably in another file) for rooms that you can purchase at a shop
//because these only really work with the base pets and some evolutions, but certainly not most of the evolutions

export const starterRoomOptions = {
    Old: {
        name: 'Old Room',
        image: oldRoomImg,
        statBonuses: {
            eerie: 30,
            weird: 10,
            grime: 10,
            cold: 5,
            mossy: 5,
        },
    },
    Cute: {
        name: 'Cute Room',
        image: pinkRoomImg,
        statBonuses: {
            style: 30,
            mundane: 20,
        },
    },
    Simple: {
        name: 'Simple Room',
        image: simpleRoomImg,
        statBonuses: {
            mundane: 30,
        },
    },
    Cozy: {
        name: 'Cozy Room',
        image: cozyRoomImg,
        statBonuses: {
            style: 10,
            mundane: 10,
            hot: 5,
            eerie: 5,
        },
    },
    Cool: {
        name: 'Cool Room',
        image: coolRoomImg,
        statBonuses: {
            style: 30,
            mundane: 10,
        },
    },
    Strange: {
        name: 'Strange Room',
        image: strangeRoomImg,
        statBonuses: {
            weird: 30,
            neon: 20,
            eerie: 10,
            mossy: 5,
        },
    }
};
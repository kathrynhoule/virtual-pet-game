import oldRoomImg from '../assets/locations/rooms/old-room.png'
import pinkRoomImg from '../assets/locations/rooms/pink-room.png'
import simpleRoomImg from '../assets/locations/rooms/simple-room.png'
import cozyRoomImg from '../assets/locations/rooms/cozy-room.png'
import coolRoomImg from '../assets/locations/rooms/cool-room.png'
import strangeRoomImg from '../assets/locations/rooms/strange-room.png'

//data for starter room options and their images
//just placeholder images right now

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
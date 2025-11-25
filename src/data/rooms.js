import oldRoomImg from '../assets/locations/rooms/old-room.png'
import pinkRoomImg from '../assets/locations/rooms/pink-room.png'
import simpleRoomImg from '../assets/locations/rooms/simple-room.png'
import cozyRoomImg from '../assets/locations/rooms/cozy-room.png'
import coolRoomImg from '../assets/locations/rooms/cool-room.png'
import strangeRoomImg from '../assets/locations/rooms/strange-room.png'

//might add further data so that rooms correspond to different styles later
//might affect pet happiness or something
//for now just images

export const starterRoomOptions = {
    Old: {
        name: 'Old Room',
        image: oldRoomImg,
        statBonuses: {
            eerie: 40,
            weird: 40,
        },
    },
    Cute: {
        name: 'Cute Room',
        image: pinkRoomImg,
        statBonuses: {
            eerie: 5,
            weird: 2,
        },
    },
    Simple: {
        name: 'Simple Room',
        image: simpleRoomImg,
        statBonuses: {
            eerie: 5,
            weird: 2,
        },
    },
    Cozy: {
        name: 'Cozy Room',
        image: cozyRoomImg,
        statBonuses: {
            eerie: 5,
            weird: 2,
        },
    },
    Cool: {
        name: 'Cool Room',
        image: coolRoomImg,
        statBonuses: {
            eerie: 5,
            weird: 2,
        },
    },
    Strange: {
        name: 'Strange Room',
        image: strangeRoomImg,
        statBonuses: {
            eerie: 5,
            weird: 2,
        },
    }
};
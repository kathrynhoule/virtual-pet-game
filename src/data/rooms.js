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
    },
    Cute: {
        name: 'Cute Room',
        image: pinkRoomImg,
    },
    Simple: {
        name: 'Simple Room',
        image: simpleRoomImg,
    },
    Cozy: {
        name: 'Cozy Room',
        image: cozyRoomImg,
    },
    Cool: {
        name: 'Cool Room',
        image: coolRoomImg,
    },
    Strange: {
        name: 'Strange Room',
        image: strangeRoomImg,
    }
};
import oldRoomImg from '../assets/locations/rooms/old-room.png'
import pinkRoomImg from '../assets/locations/rooms/pink-room.png'
import simpleRoomImg from '../assets/locations/rooms/simple-room.png'
import cozyRoomImg from '../assets/locations/rooms/cozy-room.png'
import coolRoomImg from '../assets/locations/rooms/cool-room.png'
import strangeRoomImg from '../assets/locations/rooms/strange-room.png'

//will add 2 more started room options later
//need to make an intro with room selection first
//rooms technically correspond to an NPC, but idk if i'll commit to adding that later

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
//placeholder images
import shopkeeperImg from '../assets/characters/shopkeeper.png'

//NPCs with placeholder images and dialogues
//more NPCs and dialogues will be added later
//will also add images later
//will also actually do something with this later

//there's literally no way i can leave this as 1 file for all NPCs and all dialogue for all events once i actually add more than 1 NPC and actually start adding events
//but that's for future me to worry about
//this future me person is really going to hate current me

export const NPCs = {
    Shopkeeper: {
        name: "Shopkeeper",
        image: shopkeeperImg,

        scenes: {
            intro: {
                speaker: "Shopkeeper",
                persistent: false,
                lines: [
                    "Welcome!",
                    "I haven't officially finished setting up shop yet, but since you came all this way, I guess I can make an exception.",
                    "You're looking for a pet, right? Take a look — we've got a number of little critters needing a home."
                ]
            },
            roomSelect: {
                speaker: "Shopkeeper",
                persistent: false,
                lines: [
                    "Good choice! Now let’s get you set up with a place for them to live.",
                ]
            },
            regular: {
                speaker: "Shopkeeper",
                persistent: true,
                lines: [
                    "Feel free to browse!"
                ]
            }
        }
    },
};
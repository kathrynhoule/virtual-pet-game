import { statMessages } from "../data/statMessages";

//generates messages for stat gains after an adventure
//currently set up to choose from a list of messages for each stat
//but i currently only have one message per stat

export function generateStatMessages(statGains = {}) {
    const messages = [];

    for (const stat of Object.keys(statGains)) {
        const options = statMessages[stat];
        if (!options || options.length === 0) continue;

        const message = options[Math.floor(Math.random() * options.length)];

        messages.push(message);
    }

    return messages;
}
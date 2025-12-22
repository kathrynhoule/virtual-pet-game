# 🐾 Pet Sim Evolution Game

A React-based virtual pet game where your pet grows and evolves based on how you care for it and the environments it explores. The core gameplay revolves around autonomous adventure, environment and item-based evolutions, with light caretaking elements.

---

## Current Features (MVP)
- 16 base pets (with placeholder images for now) with stats:
  - Hunger
  - Happiness
  - Energy
  - Some other stats for gameplay features which still need to be expanded upon
- Buttons to feed, play, and rest
- Time-based stat decay
- In-game day-night cycle affecting evolutions and events
- 11 adventure locations (with placeholder images) where your pet can go on timed missions to gain stats and potentially bring back useful items
- 1 base shop with 1 unlockable shop (more to come soon)
- Pet Rooms (with placeholder images for now)

---

## Upcoming Features
- Pet evolution lines with criterias
- Additional pet stats
- Shops with items that affect gameplay
- NPCs
- Events
- Saving
- Original sprites and artwork to replace the placeholders
- Sound effects and animations

---

## Tech Stack
- React
- JavaScript
- Vite
- Zustand
- Motion.js (possibly)

---

## Installation

```bash
# clone project
git clone https://github.com/kathrynhoule/virtual-pet-game.git

# go into project
cd virtual-pet-game

# install dependencies
npm install

# run development server
npm run dev
import React from 'react'
import useGameStore from './hooks/useGameStore'
import HomeScreen from './components/HomeScreen'
import AdventureScreen from './components/AdventureScreen'
import useAdventureTimer from './hooks/useAdventureTimer'
import { GameProvider } from './context/GameContext'
import ShopScreen from './components/ShopScreen'
import StartScreen from './components/StartScreen'
import RoomSelectScreen from './components/RoomSelectScreen'
import { useEffect } from 'react'
import AdventurePopUp from './components/AdventurePopUp'
import PetScreen from './components/PetScreen'
import LocationSelectScreen from './components/LocationSelectScreen'
import LocationScreen from './components/LocationScreen'

const App = () => {
    const SCREENS = {
        home: HomeScreen,
        adventure: AdventureScreen,
        shop: ShopScreen,
        start: StartScreen,
        roomSelect: RoomSelectScreen,
        pet: PetScreen,
        locationSelect: LocationSelectScreen,
        location: LocationScreen,
    };

    useAdventureTimer();

    const currentScreen = useGameStore((state) => state.currentScreen);
    const Current = SCREENS[currentScreen];

    const startGameClock = useGameStore((state) => state.startGameClock);

    useEffect(() => {
        startGameClock();
    }, []);

    return (
        <GameProvider>
            <Current />
            <AdventurePopUp />
        </GameProvider>
    );
}

export default App
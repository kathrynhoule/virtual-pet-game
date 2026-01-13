import React from 'react'
import useStatDecay from './hooks/useStatDecay'
import useGameStore from './hooks/useGameStore'
import HomeScreen from './components/HomeScreen'
import AdventureScreen from './components/AdventureScreen'
import useAdventureTimer from './hooks/useAdventureTimer'
import { GameProvider } from './context/GameContext'
import ShopScreen from './components/ShopScreen'
import StartScreen from './components/StartScreen'
import RoomSelectScreen from './components/RoomSelectScreen'
import EvolutionScreen from './components/EvolutionScreen'
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
        evolution: EvolutionScreen,
        pet: PetScreen,
        locationSelect: LocationSelectScreen,
        location: LocationScreen,
    };

    useStatDecay();
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
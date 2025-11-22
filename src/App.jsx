import React from 'react'
import useStatDecay from './hooks/useStatDecay'
import useGameStore from './hooks/useGameStore'
import HomeScreen from './components/HomeScreen'
import AdventureScreen from './components/AdventureScreen'
import useAdventureTimer from './hooks/useAdventureTimer'
import { GameProvider } from './context/GameContext'
import ShopScreen from './components/ShopScreen'
import StartScreen from './components/StartScreen'

const App = () => {
    const SCREENS = {
        home: HomeScreen,
        adventure: AdventureScreen,
        shop: ShopScreen,
        start: StartScreen,
    };

    useStatDecay();
    useAdventureTimer();

    const currentScreen = useGameStore((state) => state.currentScreen);
    const Current = SCREENS[currentScreen];

    return (
        <GameProvider>
            <Current />
        </GameProvider>
    );
}

export default App
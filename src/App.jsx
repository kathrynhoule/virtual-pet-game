import React from 'react'
import useStatDecay from './hooks/useStatDecay'
import useGameStore from './hooks/useGameStore'
import HomeScreen from './components/HomeScreen'
import AdventureScreen from './components/AdventureScreen'
import useAdventureTimer from './hooks/useAdventureTimer'

const App = () => {
    const SCREENS = {
        home: HomeScreen,
        adventure: AdventureScreen,
    };

    useStatDecay();
    useAdventureTimer();

    const currentScreen = useGameStore((state) => state.currentScreen);
    const Current = SCREENS[currentScreen];
    return <Current />;
}

export default App
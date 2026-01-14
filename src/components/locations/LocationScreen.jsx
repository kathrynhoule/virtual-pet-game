import React from 'react'
import useGameStore from '../../hooks/useGameStore'
import { eventLocations } from '../../data/eventLocations'

import Lab from './Lab'
import BulletinBoard from './BulletinBoard'
import Woods from './Woods'
import Dock from './Dock'
import AbandonedHouse from './AbandonedHouse'


const LOCATION_COMPONENTS = {
    Lab,
    BulletinBoard,
    Woods,
    Dock,
    AbandonedHouse,
};

const LocationScreen = () => {
    const currentLocation = useGameStore((state) => state.currentLocation);
    const setScreen = useGameStore((state) => state.setScreen);

    if (!currentLocation) {
        setScreen('locationSelect');
        return null;
    }

    const LocationComponent = LOCATION_COMPONENTS[currentLocation];
    const locationData = eventLocations[currentLocation];

    if (!LocationComponent) {
        return <p>Unknown location.</p>;
    }

    return (
        <div>
            <h2>{locationData.name}</h2>
            <LocationComponent data={locationData} />

            <button onClick={() => setScreen("locationSelect")}>
                Leave Location
            </button>
        </div>
    );
}

export default LocationScreen
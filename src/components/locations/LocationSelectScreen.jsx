import React from 'react'
import { eventLocations } from '../../data/eventLocations'
import useGameStore from '../../hooks/useGameStore'

const LocationSelectScreen = () => {
    const { setLocation , setScreen } = useGameStore();

    return (
        <div>
            <h2>Where do you want to go?</h2>

            <ul>
                {Object.entries(eventLocations).map(([key, location]) => (
                    <li key={key}>
                    <h3>{location.name}</h3>
                    <p>{location.description}</p>

                    <button onClick={() => setLocation(key)}>
                        Go to {location.name}
                    </button>
                    </li>
                ))}
            </ul>

            <button onClick={() => setScreen("home")}>
                Go Back Home
            </button>
        </div>
    )
}

export default LocationSelectScreen
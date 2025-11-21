import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { shopLocations } from '../data/shops'
import { useState } from 'react'

//will add purchasing logic later
//don't feel like it right now

const ShopScreen = () => {
    const { pet, inventory, setScreen, purchaseItem } = useGameStore();

    const [selectedShop, setSelectedShop] = useState(null);
    
    const unlockedShops = Object.entries(shopLocations).filter(
        ([key, shop]) => pet.adventuresCompleted >= (shop.unlockAt ?? 0)
    );

    const lockedShops = Object.entries(shopLocations).filter(
        ([key, shop]) => pet.adventuresCompleted < (shop.unlockAt ?? 0)
    );

    const shopData = selectedShop
        ? shopLocations[selectedShop]
        : null;

    return (
        <div>
            <h2>Shop</h2>

            {!selectedShop && (
                <>
                    <h3>Available Shops</h3>

                    {unlockedShops.map(([key, shop]) => (
                        <button key={key} onClick={() => setSelectedShop(key)}>
                            Enter {shop.name}
                        </button>
                    ))}

                    <h3>Locked Shops</h3>
                    {lockedShops.map(([key, shop]) => (
                        <button key={key} disabled>
                            {shop.name} (Unlocks at {shop.unlockAt} adventures)
                        </button>
                    ))}

                    <br /><br />
                    <button onClick={() => setScreen("home")}>Back Home</button>
                </>
            )}

            {selectedShop && shopData && (
                <div>
                    <h3>{shopData.name}</h3>

                    <ul>
                        {shopData.inventory.map((item, i) => (
                            <li key={i}>
                                <strong>{item.name}</strong> – {item.description} (₲{item.price})
                            </li>
                        ))}
                    </ul>

                    <button onClick={() => setSelectedShop(null)}>
                        Back to Shop List
                    </button>

                    <button onClick={() => setScreen("home")}>
                        Back Home
                    </button>
                </div>
            )}
        </div>
    );
}

export default ShopScreen
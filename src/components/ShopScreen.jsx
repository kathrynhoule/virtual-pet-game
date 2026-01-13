import React from 'react'
import useGameStore from '../hooks/useGameStore'
import { shopLocations } from '../data/shops'
import { useState } from 'react'
import items from '../data/items'
import DialogueBox from './DialogueBox'
import { NPCs } from '../data/npcs'

//this also looks like hell
//but i don't want to change it right now

const ShopScreen = () => {
    const { pet, inventory, setScreen, purchaseItem, sellItem, startDialogue } = useGameStore();

    const [mode, setMode] = useState("buy");

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

            <DialogueBox />

            {!selectedShop && (
                <>
                    <h3>Available Shops</h3>

                    {unlockedShops.map(([key, shop]) => (
                        <button
                            key={key}
                            onClick={() => {
                                setSelectedShop(key);

                                if (key === "General") {
                                    startDialogue(NPCs.Shopkeeper.scenes.regular);
                                }
                            }}
                        >
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

                    <div>
                    <button onClick={() => setMode("buy")} disabled={mode === "buy"}>
                        Buy
                    </button>
                    <button onClick={() => setMode("sell")} disabled={mode === "sell"}>
                        Sell
                    </button>
                    </div>

                    {mode === "buy" && (
                        <ul>
                            {shopData.inventory.map((entry, i) => {
                            const itemData = items[entry.id];
                            if (!itemData) return <li key={i}>⚠ Unknown item: {entry.id}</li>;

                            return (
                                <li key={i}>
                                <strong>{itemData.name}</strong> – {itemData.description} (₲{itemData.buyPrice})
                                <button onClick={() => purchaseItem(entry.id)}>
                                    Buy
                                </button>
                                </li>
                            );
                            })}
                        </ul>
                    )}

                    {mode === "sell" && (
                        <ul>
                            {Object.keys(inventory.items).map((itemId) => {
                            const itemData = items[itemId];
                            if (!itemData) return null;

                            const canShopBuy =
                                shopData.buysCategories.includes(itemData.category);

                            return (
                                <li key={itemId}>
                                <strong>{itemData.name}</strong> — You have {inventory.items[itemId]}

                                {canShopBuy ? (
                                    <>
                                    {" "}
                                    (Sell for ₲{itemData.sellPrice})
                                    <button onClick={() => sellItem(itemId)}>
                                        Sell
                                    </button>
                                    </>
                                ) : (
                                    <em> (This shop doesn’t buy this item)</em>
                                )}
                                </li>
                            );
                            })}
                        </ul>
                    )}

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
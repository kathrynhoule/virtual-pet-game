import React from 'react'

const InventoryScreen = ({ inventory }) => {
    return (
        <div>
            <h2>Inventory</h2>

            <p>Money: {inventory.money}</p>

            <h3>Items</h3>
            
            {inventory.items.length === 0 && <p>No items yet.</p>}
            <ul>
                {inventory.items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default InventoryScreen

import React from 'react'

//displays inventory
//i gotta do something else with this later
//will make it not directly on the home screen

const InventoryScreen = ({ inventory }) => {
    return (
        <div>
            <h2>Inventory</h2>

            <p>Money: {inventory.money}</p>

            <h3>Items</h3>
            
            {inventory.items.length === 0 && <p>No items yet.</p>}
            <ul>
                {Object.entries(inventory.items).map(([id, qty]) => (
                    <li key={id}>
                    {id} × {qty}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InventoryScreen

import React from 'react'

//displays inventory
//i gotta do something else with this later
//will make it not directly on the home screen
//also need to display multiples of the same item in one line so inventory doesn't end up a million lines long like it currently does

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

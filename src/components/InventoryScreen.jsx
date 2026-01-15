import React from 'react'

//i can't recall completely, but i think i maybe am not using this at all right now?
//maybe i'll update it and use it in the future though, so i'm not going to delete it just yet

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

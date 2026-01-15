import React from 'react'
import items from "../../data/items";

const createShopSlice = (set, get) => ({

purchaseItem: (itemId) =>
    set((state) => {
        const item = items[itemId];
        if (!item) return state;

        if (state.inventory.money < item.buyPrice) {
            return state;
        }

        return {
            inventory: {
                ...state.inventory,
                money: state.inventory.money - item.buyPrice,
                items: {
                    ...state.inventory.items,
                    [itemId]: (state.inventory.items[itemId] || 0) + 1,
                }
            },
        };
    }),

    sellItem: (itemId) =>
        set((state) => {
            const item = items[itemId];
            if (!item) return state;

            if (!state.inventory.items[itemId]) {
                return state;
            }

            const updatedItemCount = state.inventory.items[itemId] - 1;

            const updatedItems = { ...state.inventory.items };

            if (updatedItemCount <= 0) {
                delete updatedItems[itemId];
            }
            else {
                updatedItems[itemId] = updatedItemCount;
            }

            return {
                inventory: {
                    ...state.inventory,
                    money: state.inventory.money + item.sellPrice,
                    items: updatedItems,
                },
            };
        }),
});

export default createShopSlice
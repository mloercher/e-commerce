import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            // use findIndex to determine if we already have item (by id) in cart, if we do then increment cart quantity of particular item, if item is NOT in cart add it as new item  
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct)
            }

        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
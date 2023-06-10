import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: localStorage.getItem("cart_items") ? JSON.parse(localStorage.getItem("cart_items")) : {}
}

export const CartItemSlice = createSlice({
    name: "cart_items",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.items[action.payload.id]) {
                state.items[action.payload.id].quantity += 1;
            }
            else {
                const itemDetails = { ...action.payload, quantity: 1 }
                state.items[action.payload.id] = itemDetails;
            }
            localStorage.setItem("cart_items", JSON.stringify(state.items));
        },

        removeFromCart: (state, action) => {
            state.items[action.payload.id].quantity -= 1;
            if (state.items[action.payload.id].quantity === 0) {
                delete state.items[action.payload.id]
            }
            localStorage.setItem("cart_items", JSON.stringify(state.items));
        },

        clearCart: (state) => {
            state.items = {};
            localStorage.setItem("cart_items", JSON.stringify(state.items));
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = CartItemSlice.actions;
export default CartItemSlice.reducer;
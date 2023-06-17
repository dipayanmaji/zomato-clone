import { createSlice } from "@reduxjs/toolkit";
import { updateCartItems } from "../../utils/updateCartItems/updateCartItems";

const initialState = {
    items: localStorage.getItem("cart_items") ? JSON.parse(localStorage.getItem("cart_items")) : {}
}

export const CartItemSlice = createSlice({
    name: "cart_items",
    initialState,
    reducers: {
        cartInitialization: (state, action) => {
            state.items = action.payload;
            localStorage.setItem("cart_items", JSON.stringify(state.items));
            updateCartItems();
        },

        addToCart: (state, action) => {
            if (state.items[action.payload.id]) {
                state.items[action.payload.id].quantity += 1;
            }
            else {
                const itemDetails = { ...action.payload, quantity: 1 }
                state.items[action.payload.id] = itemDetails;
            }
            localStorage.setItem("cart_items", JSON.stringify(state.items));
            updateCartItems();
        },

        removeFromCart: (state, action) => {
            state.items[action.payload.id].quantity -= 1;
            if (state.items[action.payload.id].quantity === 0) {
                delete state.items[action.payload.id]
            }
            localStorage.setItem("cart_items", JSON.stringify(state.items));
            updateCartItems();
        },

        clearCart: (state) => {
            state.items = {};
            localStorage.removeItem("cart_items");
            updateCartItems();
        }
    }
})

export const { cartInitialization, addToCart, removeFromCart, clearCart } = CartItemSlice.actions;
export default CartItemSlice.reducer;
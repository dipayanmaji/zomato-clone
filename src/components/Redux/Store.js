import { configureStore } from "@reduxjs/toolkit";
import CartItemReducer from "./CartItemSlice";

export const Store = configureStore({
    reducer: {
        cart_items: CartItemReducer
    }
})
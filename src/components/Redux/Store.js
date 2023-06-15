import { configureStore } from "@reduxjs/toolkit";
import CartItemReducer from "./CartItemSlice";
import LoginUserReducer from "./LoginUserSlice";

export const Store = configureStore({
    reducer: {
        cart_items: CartItemReducer,
        login_user: LoginUserReducer
    }
})
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("login_user") ? JSON.parse(localStorage.getItem("login_user")) : null
}

export const LoginUserSlice = createSlice({
    name: "login_user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            localStorage.setItem("login_user", JSON.stringify(state.user));
        },

        logout: (state) => {
            state.user = null;
            localStorage.removeItem("login_user");
        }
    }
})

export const { login, logout } = LoginUserSlice.actions;
export default LoginUserSlice.reducer;
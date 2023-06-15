import axios from "axios";
import { SERVER_URL } from "../config/config";

let timeOut;
export const updateCartItems = () => {
    const loginUser = localStorage.getItem("login_user") ? JSON.parse(localStorage.getItem("login_user")) : null;
    const items = localStorage.getItem("cart_items") ? JSON.parse(localStorage.getItem("cart_items")) : {};

    if (!loginUser) {
        return;
    }

    clearTimeout(timeOut);
    timeOut = setTimeout(async () => {
        try {
            const userData = {
                email: loginUser.email,
                cart_items: items
            }

            const response = await axios.patch(SERVER_URL + "/api/product/updatecart", userData);
        }
        catch (err) {
            console.log("updateCartItems error", err);
        }
    }, 2000)
}
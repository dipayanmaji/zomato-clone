const User = require("../models/User");

const updateCart = async (req, res) => {
    const { email, cart_items } = req.body;
    if (!email || !cart_items) {
        return res.status(400).json({
            status: "Error",
            message: "Provide email and cart_items"
        })
    }

    try {
        const existsUser = await User.findOne({ email });
        if (!existsUser) {
            return res.status(404).json({
                status: "Error",
                message: "User not found"
            })
        }
        const user = await User.findOneAndUpdate({ email }, { cart_items }, { new: true });
        res.status(200).json({
            status: "Success",
            cart_items: user.cart_items
        })
    }
    catch (err) {
        res.status(500).json({
            status: "Error",
            message: err.message
        })
    }
}

module.exports.updateCart = updateCart;
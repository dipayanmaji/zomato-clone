const User = require("../models/User");
const { encryptPassword, comparePassword } = require("../utils/passwordHelper");
const { generateAuthToken } = require("../utils/tokenHelper");
const { registerValidation, loginValidation } = require("../validators/auth");


const register = async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({
            status: "Error",
            message: error.details[0].message
        })
    }

    try {
        const { name, email, password } = req.body;
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(400).json({
                status: "Error",
                message: "Email already exists"
            })
        }

        const hashed_password = await encryptPassword(password);
        const newUser = new User({ name, email, password: hashed_password });
        const result = await newUser.save();
        res.status(201).json({
            status: "Success",
            message: "User register successful!",
            user: { _id: result._id, email: result.email, name: result.name }
        })
    }
    catch (err) {
        res.status(500).json({
            status: 'Error',
            message: "Something went wrong",
            error: err.message
        })
    }
}

const login = async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).json({
            status: "Error",
            message: error.details[0].message
        })
    }

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: "Not Found",
                message: "Email dose not exists"
            })
        }

        const isPasswordStatus = await comparePassword(password, user.password);
        if (!isPasswordStatus) {
            return res.status(400).json({
                status: "Error",
                message: "Incorrect password"
            })
        }

        const token = generateAuthToken(user);
        res.status(201).json({
            status: "Success",
            message: "User login successful!",
            user: { _id: user._id, email: user.email, name: user.name },
            cart_items: user.cart_items,
            token
        })
    }
    catch (err) {
        res.status(500).json({
            status: 'Error',
            message: "Something went wrong",
            error: err.message
        })
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie();
        res.status(201).json({
            "message": "Logged out successful",
            "status": "Success"
        })
    }
    catch (err) {
        res.status(500).json({
            status: 'Error',
            message: "Something went wrong",
            error: err.message
        })
    }
}

const allUser = async (req, res) => {
    try {
        const users = await User.find({}, { name: 1, email: 1, cart_items: 1 });
        res.status(200).json({
            "message": "All Users Data",
            "status": "Success",
            users
        })
    }
    catch (err) {
        res.status(500).json({
            status: 'Error',
            message: "Something went wrong",
            error: err.message
        })
    }
}

module.exports.register = register;
module.exports.login = login;
module.exports.logout = logout;
module.exports.allUser = allUser;
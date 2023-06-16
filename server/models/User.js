const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, "Name minlength is 2"],
        maxlength: [50, "Name maxlength is 50"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [6, "Password minlength is 6"]
    },
    cart_items: {
        type: Object,
        default: {}
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = model("user", UserSchema);
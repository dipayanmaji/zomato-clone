const jwt = require("jsonwebtoken");

const generateAuthToken = ({ _id, name, email }) => {
    const token = jwt.sign({ _id, name, email }, process.env.AUTH_TOKEN_SECRET);
    return token;
}

module.exports.generateAuthToken = generateAuthToken;
const bcrypt = require("bcryptjs");
const slatFactor = 10;

const encryptPassword = async (password) => {
    try {
        const slat = await bcrypt.genSalt(slatFactor);
        const hashed_password = await bcrypt.hash(password, slat);
        return hashed_password;
    }
    catch (err) {
        throw err;
    }
}

const comparePassword = async (password, actualPssword) => {
    try {
        return await bcrypt.compare(password, actualPssword);
    }
    catch (err) {
        throw err;
    }
}

module.exports.encryptPassword = encryptPassword;
module.exports.comparePassword = comparePassword;
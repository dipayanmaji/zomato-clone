const Joi = require("joi");

const registerValidation = (data)=>{
    const schema = Joi.object().keys({
        name: Joi.string().min(2).max(50).trim().required(),
        email: Joi.string().email().trim().required(),
        password: Joi.string().min(6).trim().required()
    })
    return schema.validate(data);
}

const loginValidation = (data)=>{
    const schema = Joi.object().keys({
        email: Joi.string().email().trim().required(),
        password: Joi.string().required()

    })
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
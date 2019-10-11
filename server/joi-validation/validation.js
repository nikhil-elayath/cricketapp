const Joi = require("joi");

function Validation(users) {
  const schema = {
    user_name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    user_email: Joi.string()
      .min(5)
      .max(200)
      .required()
      .email(),

    user_password: Joi.string()
      .min(5)
      .max(255)
      .required(),

    isadmin: Joi.boolean().required()
  };
  return Joi.validate(users, schema);
}

module.exports = Validation;

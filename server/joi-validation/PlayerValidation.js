const Joi = require("joi");

function PlayerValidation(players) {
  const schema = {
    player_name: Joi.string()
      .min(2)
      .max(50)
      .required(),

    player_country: Joi.string()
      .min(5)
      .max(50)
      .required(),

    player_role: Joi.string()
      .min(5)
      .max(50)
      .required(),

    player_gender: Joi.string()
      .min(2)
      .max(50)
      .required(),

    player_dob: Joi.string().required(),

    batting_style: Joi.string()
      .min(5)
      .max(50)
      .required(),

    bowling_style: Joi.string()
      .min(5)
      .max(50)
      .required(),

    debut_odi_match: Joi.string()
      .min(5)
      .max(100)
      .required(),
    debut_test_match: Joi.string()
      .min(5)
      .max(100)
      .required(),
    debut_t20_match: Joi.string()
      .min(5)
      .max(100)
      .required()
  };
  return Joi.validate(players, schema);
}

module.exports = PlayerValidation;

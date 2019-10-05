const Joi = require("joi");

function PlayerValidation(players) {
  const schema = {
    player_name: Joi.string()
      .min(2)
      .max(50)
      .required(),

    player_type: Joi.string()
      .min(5)
      .max(50)
      .required(),

    batting_style: Joi.string()
      .min(5)
      .max(50)
      .required(),

    bowling_style: Joi.string()
      .min(5)
      .max(50)
      .required(),

    player_dob: Joi.date()
      .format("YYYY-MM-DD")
      .options({ convert: false }),

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

const Joi = require("joi");

function TeamValidation(teams) {
  const schema = {
    team_name: Joi.string()
      .min(2)
      .max(50)
      .required()
  };
  return Joi.validate(teams, schema);
}

module.exports = TeamValidation;

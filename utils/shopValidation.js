const Joi = require('joi');

const shopValidator = data => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(60).required(),
  });

  return schema.validate(data);
};

module.exports = shopValidator;

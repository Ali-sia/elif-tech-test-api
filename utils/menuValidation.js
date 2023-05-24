const Joi = require('joi');

const menuValidator = data => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(60).required(),
    price: Joi.number.min(0.00001),
    photo: Joi.string().allow(''),
  });

  return schema.validate(data);
};

module.exports = menuValidator;

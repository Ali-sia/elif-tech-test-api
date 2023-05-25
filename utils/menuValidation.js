const Joi = require('joi');

const menuValidator = data => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(60).required(),
    price: Joi.number().positive().greater(0.01).required(),
    quantity: Joi.number().positive(),
    photo: Joi.string().allow(''),
    owner: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports = menuValidator;

const Joi = require('joi');

const orderValidator = data => {
  const schema = Joi.object({
    client: Joi.object({
      name: Joi.string().min(3).max(40).allow(''),
      email: Joi.string().email({ minDomainSegments: 2 }),
      phone: Joi.string().min(3).max(16).allow(''),
      address: Joi.string().min(10).max(160).allow(''),
    }),
    orderItems: Joi.array().items(Joi.string()),
  });

  return schema.validate(data);
};

module.exports = orderValidator;

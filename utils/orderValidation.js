const Joi = require('joi');

const orderItemSchema = Joi.object({
  createdAt: Joi.string(),
  name: Joi.string(),
  owner: Joi.string(),
  photo: Joi.string().allow(null).optional(),
  price: Joi.number(),
  quantity: Joi.number().integer().min(0),
  updatedAt: Joi.string(),
  _id: Joi.string(),
});

const orderValidator = data => {
  const schema = Joi.object({
    client: Joi.object({
      name: Joi.string().min(3).max(40).allow(''),
      email: Joi.string().email({ minDomainSegments: 2 }),
      phone: Joi.string().min(3).max(16).allow(''),
      address: Joi.string().min(10).max(160).allow(''),
    }),
    orderItems: Joi.array().items(orderItemSchema),
    // orderItems: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports = orderValidator;

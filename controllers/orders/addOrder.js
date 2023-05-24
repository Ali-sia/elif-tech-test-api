const { catchAsync } = require('../../utils/index');
const { orderValidator } = require('../../utils');
const createError = require('http-errors');
const { Order } = require('../../models/index');

const addOrder = catchAsync(async (req, res, next) => {
  const { client, orderItems } = req.body;

  const { name, email, phone, address } = client;

  const { error } = orderValidator({
    client,
    orderItems,
  });
  if (error) {
    throw createError(400, error.message);
  }

  if (!name || !phone || !address) {
    throw createError(400, 'missing required name field');
  }

  const data = await Order.create({ client, orderItems });

  res.status(201).json({
    status: 'added',
    code: 201,
    data,
  });
});

module.exports = addOrder;

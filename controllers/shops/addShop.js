const createError = require('http-errors');
const { Shop } = require('../../models/index');
const { catchAsync } = require('../../utils/index');
const { shopValidator } = require('../../utils');

const addShop = catchAsync(async (req, res, next) => {
  const { name } = req.body;

  const { error } = shopValidator(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  if (!name) {
    throw createError(400, 'missing required name field');
  }
  const data = await Shop.create({ ...req.body });

  res.status(201).json({
    status: 'added',
    code: 201,
    data,
  });
});

module.exports = addShop;

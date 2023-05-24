const { Menu } = require('../../models/index');
const createError = require('http-errors');
const { menuValidator } = require('../../utils');

const { catchAsync } = require('../../utils/index');

const addMenuItem = catchAsync(async (req, res, next) => {
  const { name, photo, price, owner } = req.body;

  const { error } = menuValidator(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  if (!name || !price || !owner) {
    throw createError(400, 'missing required name field');
  }

  const result = await Menu.create({ name, photo, price, owner });

  res.status(201).json({
    status: 'added',
    code: 201,
    data: { result },
  });
});

module.exports = addMenuItem;

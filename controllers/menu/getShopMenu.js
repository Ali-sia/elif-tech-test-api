const createError = require('http-errors');
const { Menu } = require('../../models/index');
const { catchAsync } = require('../../utils/index');

const getShopMenu = catchAsync(async (req, res, next) => {
  const { menusId } = req.params;

  const data = await Menu.find({ owner: menusId });
  if (!data) {
    throw createError(404, `Shop with id ${menusId} not found`);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data,
  });
});

module.exports = getShopMenu;

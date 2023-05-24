const { Menu } = require('../../models/index');
const createError = require('http-errors');
const { catchAsync } = require('../../utils/index');

const getShopMenu = catchAsync(async (req, res, next) => {
  const { menuId } = req.params;

  const data = await Menu.find({ owner: menuId });
  if (!result) {
    throw createError(404, `Shop with id ${menuId} not found`);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data,
  });
});

module.exports = getShopMenu;

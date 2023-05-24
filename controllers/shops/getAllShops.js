const { catchAsync } = require('../../utils/index');
const { Shop } = require('../../models/index');

const getAllShops = catchAsync(async (req, res, next) => {
  const data = await Shop.find();

  res.status(200).json({
    status: 'ok',
    code: 200,
    data,
  });
});

module.exports = getAllShops;

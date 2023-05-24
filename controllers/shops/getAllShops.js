const { catchAsync } = require('../../utils/index');
// const { userLoginValidator } = require('../../utils');
const { Shop } = require('../../models/index');

const getAllShops = catchAsync(async (req, res, next) => {
  const shops = await Shop.find();

  res.status(200).json({
    status: 'ok',
    code: 200,
    data: { shops },
  });
});

module.exports = getAllShops;

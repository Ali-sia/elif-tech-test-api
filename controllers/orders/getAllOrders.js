const { catchAsync } = require('../../utils/index');
const { Order } = require('../../models/index');

const getAllOrders = catchAsync(async (req, res, next) => {
  const data = await Order.find();

  res.status(200).json({
    status: 'ok',
    code: 200,
    data,
  });
});

module.exports = getAllOrders;

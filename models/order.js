const { Schema, model } = require('mongoose');

const orderSchema = Schema(
  {
    client: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    orderItems: {},
  },
  { versionKey: false, timestamps: true }
);

const Order = model('order', orderSchema);

module.exports = Order;

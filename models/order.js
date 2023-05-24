const { Schema, model } = require('mongoose');

const orderSchema = Schema(
  {
    client: {
      type: Object,
      required: true,
    },
    orderItems: {
        type: Array,
        required: true,
      },
  },
  { versionKey: false, timestamps: true }
);

const Order = model('order', orderSchema);

module.exports = Order;

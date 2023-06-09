const { Schema, model } = require('mongoose');

const menuSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for product'],
    },
    photo: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'shop',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Menu = model('menu', menuSchema);

module.exports = Menu;

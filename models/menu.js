const { Schema, model } = require('mongoose');

const menuSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    photo: {
      type: String,
      default:null,
    },
    price: {
      type: Number,
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

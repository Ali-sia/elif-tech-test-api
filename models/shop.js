const { Schema, model } = require('mongoose');

const shopSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Shop = model('shop', shopSchema);

module.exports = Shop;

const express = require('express');

const { menu: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/:menuId', ctrl.getShopMenu);

module.exports = router;

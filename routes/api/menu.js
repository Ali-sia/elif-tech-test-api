const express = require('express');

const { menu: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/:menuId', ctrl.getShopMenu);
router.post('/', ctrl.addMenuItem);

module.exports = router;

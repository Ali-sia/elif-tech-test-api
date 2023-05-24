const express = require('express');

const { orders: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrl.getAllOrders);
router.post('/', ctrl.addOrder);

module.exports = router;

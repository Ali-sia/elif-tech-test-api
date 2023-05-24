const express = require('express');

const { orders: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/', ctrl.addOrder);

module.exports = router;

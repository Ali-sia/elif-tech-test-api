const express = require('express');

const { shops: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrl.getAllShops);

module.exports = router;

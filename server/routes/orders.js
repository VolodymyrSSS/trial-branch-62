const express = require('express');
const router = express.Router();

const { getOrders, createOrder } = require('../controllers/orders');


router.post('/', createOrder);
router.get('/', getOrders);

module.exports = router;
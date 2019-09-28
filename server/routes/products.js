const express = require('express');
const router = express.Router();

const {addProduct, getProducts, getProductsFilter} = require('../controllers/products');

router.get('/get', getProducts);
router.get('/filters', getProductsFilter);
router.post('/add', addProduct);


module.exports = router;
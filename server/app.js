const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();
const connectMongooseDB = require('./db/index');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(__dirname + '/static'));

connectMongooseDB();
const authMiddleWare = require('./middleware/auth');

const routes = require('./routes/index');
const authCustomer = require('./routes/authentication');
const orders = require('./routes/orders');
const profile = require('./routes/profile');
const products = require('./routes/products');
const sliders = require('./routes/sliders');
const subscribe = require('./routes/subscribe');
const navCategoryOfProduct = require('./routes/navCategoryOfProduct');
const recommendedProduct = require('./routes/recommendedProduct');
const mainRoute = require('./routes/index');


app.use('/orders', authMiddleWare, orders);
app.use('/profile', authMiddleWare, profile);
app.use('/authentication', authCustomer);
app.use('/products', products);
app.use('/slides', sliders);
app.use('/subscribe', subscribe);
app.use('/category-of-product', navCategoryOfProduct);
app.use('/recom-product', recommendedProduct);
app.use('/', mainRoute);


app.listen(process.env.PORT_SERVER, () => console.log(`${process.env.PORT_SERVER} you in this port now`));
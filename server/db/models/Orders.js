const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ordersSchema = new mongoose.Schema({
    _id: ObjectId,
    billing_adress: {
        city: String,
        country_code: String,
        first_name: String,
        full_name: String,
        last_name: String
    },
    create_date: String,
    currency: String,
    order_no: String,
    order_tital: Number,
    customer_info: { 
        type: ObjectId,
        ref: 'customers' 
    },
    product_item:[{
        price: Number,
        product_id: String,
        product_name: String,
        quantity: Number
    }]
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = Orders = mongoose.model('orders', ordersSchema);
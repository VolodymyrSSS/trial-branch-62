const mongoose = require("mongoose");
const Customer = require("../db/models/Customer");
const Orders = require("../db/models/Orders");
const orderHelper = require("../helpers/orderHelper");

const getOrders = async (req, res) => {

}

const createOrder = async (req, res) => {

    const thisCustomer = await orderHelper.getThisCustomer({email: "lalala@ukr.net"});

    
    const newOrder = new Orders({
        _id: new mongoose.Types.ObjectId(),
        customer_info: thisCustomer._id,
        create_date:"new order1"
    });

    const order = await Orders.create(newOrder);
    await orderHelper.saveOrderInCustomer(order._id, thisCustomer);

    res.json(order);
    
}


module.exports = {
    getOrders,
    createOrder
};
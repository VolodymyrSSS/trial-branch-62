const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const phoneSchema = new mongoose.Schema({
    _id: ObjectId,
    category: String,
    brand: String,
    model: String,
    discription: String,
    ram: Number,
    rom: Number,
    display: Number,
    color: String,
    price: Number,
    images: String    //главная дериктория , где лежат все картинки данного товара
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

module.exports = Phone = mongoose.model('phones', phoneSchema);
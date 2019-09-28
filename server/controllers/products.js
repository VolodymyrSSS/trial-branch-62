const mongoose = require("mongoose");

const Products = require("../db/models/products/Products");
const ProductsFilters = require("../db/models/products/ProductsFilters");

const  addProduct = (req, res) => {
    const newProduct = Products({
        _id: new mongoose.Types.ObjectId(),
        quantity: 999,
        price: req.body.price,
        old_price: req.body.old_price,
        category: req.body.category,
        brand: req.body.brand,
        model: req.body.model,
        images:req.body.images,
        color: req.body.color,
        discription: req.body.discription,
        display: req.body.display,
        ram:req.body.ram,
        rom:req.body.rom,
        seria:req.body.seria,
        cpu:req.body.cpu,
        star: 0,
    })

    try {

        Products.create(newProduct, function (err, createPhone) {
            if (err) {
                res.status(400).json({ message: err.message});
            } else {
                res.status(200).json({createPhone});
            }
        })

    } catch(error) {
        res.status(400).json({ message: error.message});
    }
    
}

const  getProducts = (req, res) => {

    try {
        Products.find({}, function(error, allProducts){
            if (error) {
                res.status(400).json({ message: err.message});
            } else {
                res.status(200).send(allProducts);
            }
        })

    } catch(error) {
        res.status(400).json({ message: error.message});
    }
}

const getProductsFilter = (req, res) => {
    try {
        ProductsFilters.find()
        .exec()
        .then(allFilters => {
            res.status(200).send(allFilters)
        })

    } catch(error) {
        res.status(400).json({ message: error.message});
    }
}

module.exports = {
    addProduct,
    getProducts,
    getProductsFilter
};


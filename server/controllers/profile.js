const Customer = require("../db/models/Customer");
const jwt = require('jsonwebtoken');
const { secret } = require('../config/token').jwt;
const bCrypt = require('bcrypt');

const hashPassHelper = require("../helpers/hashPassHelper");
const authHelper = require("../helpers/authHelper");

const getProfile = async (req, res) => {
    const authHeader = req.get('authorization');
    
    const customerId = jwt.verify(authHeader, secret, (err, decoded) => {
        return decoded.userId;
    });

    await Customer.findOne({_id:customerId})
        .exec()
        .then((customer) => {
        if(!customer) {
            res.status(401).json({ message: "Customer doest not exist"});  //incorrect data or not found customer in db
        } else {
            res.status(200).json({customer:{
                email:customer.email,
                first_name:customer.first_name,
                last_name:customer.last_name,
                login:customer.login,
                orders: customer.orders
            }})
        }
    })
    .catch(error => res.status(500).json({ message: error.message}))
};

const editProfile = async (req, res) => {

    const { email, login, firstName, lastName} = req.body.data;
    const authHeader = req.get('authorization');

    const customerId = jwt.verify(authHeader, secret, (err, decoded) => {
        return decoded.userId;
    });
    
    const findEmail = await authHelper.findCustomer(email, customerId);
        if(findEmail){ //if email don't used other customer
        
            Customer.findOneAndUpdate({_id: customerId}, {login:login, email:email, last_name:lastName, first_name:firstName},{new: true})
            .exec()
            .then((customer) => {
                if(!customer) {
                    res.status(401).json({ message: "Customer doest not exist"});  //incorrect data or not found customer in db
                } else {
                    res.status(200).json({customer:{
                        email:customer.email,
                        first_name:customer.first_name,
                        last_name:customer.last_name,
                        login:customer.login,
                        orders: customer.orders
                    }})
                }
            })
            .catch(error => res.status(500).json({ message: error.message}))
        } else {
            res.status(401).json({ message: "This email used other customer"});
        }
};

const editPassword = async (req, res) => {
    const authHeader = req.get('authorization');

    const {oldPassword, newPassword} = req.body.data;

    const customerId = jwt.verify(authHeader, secret, (err, decoded) => {
        if(err){
            res.status(401).json({ message: "Invalid success toket, please reload page"})
        }
        return decoded.userId;
    });

    await Customer.findOne({_id: customerId})
        .exec()
        .then((customer) => {
            if(!customer) {
                res.status(401).json({ message: "Customer doest not exist"});  //incorrect data or not found customer in db
            } 
            
            const isValid = bCrypt.compareSync(oldPassword, customer.password);  //need change on "password"

            if(isValid) {
                const hashPasswordFromUser = hashPassHelper.generateHashPassword(newPassword);

                customer.password = hashPasswordFromUser;

                customer.save(function(error, user){
                    if(error){
                        res.status(500).json({ message: error.message});
                    } else {
                        res.status(200).json({message: "Password change"});
                    }
                });
            } else {
           
                res.status(401).json({ message: "Invalid old password"});
            }
        })
        .catch(error => res.status(500).json({ message: error.message}))    
};

module.exports = {
    getProfile,
    editProfile,
    editPassword,
};
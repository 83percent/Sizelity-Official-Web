const Mongoose = require('mongoose');
const COLL_NAME = 'product';

const ProductModel = new Mongoose.Schema({},{ collection : 'products'});

module.exports = Mongoose.model(COLL_NAME, ProductModel);
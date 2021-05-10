const Mongoose = require('mongoose');
const COLL_NAME = 'shop';

const UserModel = new Mongoose.Schema({},{ collection : 'shops'});

module.exports = Mongoose.model(COLL_NAME, UserModel);
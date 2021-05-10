const Mongoose = require('mongoose');
const COLL_NAME = 'shop_user';

const ShopUserModel = new Mongoose.Schema({
    sname : {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    url : { // http , www 생략
        type: String,
        require: true
    },
    reg_date : {
        type: Date,
        default : Date.now
    }
});

module.exports = Mongoose.model(COLL_NAME, ShopUserModel);
const Mongoose = require('mongoose');
const COLL_NAME = 'shop_user';

const ShopUserModel = new Mongoose.Schema({
    sname : {
        type: String,
        require: true
    },
    domain : { // http , www 생략
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    info : {
        ceo : {
            type: String,
            require: true
        },
        tel : {
            type: String,
            require: true
        },
        email : {
            type: String,
            require: true
        },
        address : {
            type: String
        }
    },
    product : {
        length : {
            type: Number,
            default: 0
        },
        request : {
            type: Number,
            default: 0
        }
    },
    reg_date : {
        type: Date,
        default : Date.now
    },
    status : {
        type: Number,
        default : 0
    }
}, {
    versionKey: false
});

module.exports = Mongoose.model(COLL_NAME, ShopUserModel);
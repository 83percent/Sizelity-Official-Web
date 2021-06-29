const Mongoose = require('mongoose');
const COLL_NAME = 'reservation';

const ReservationModel = new Mongoose.Schema({
    domain : { 
        type: String,
        require: true
    },
    name : {
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
    privacy : {
        service : {
            type: Boolean,
            require: true
        },
        personal : {
            type: Boolean,
            require: true
        },
        promotion : {
            type : Boolean,
            default: false
        }
    }
}, {
    versionKey: false
});

module.exports = Mongoose.model(COLL_NAME, ReservationModel);
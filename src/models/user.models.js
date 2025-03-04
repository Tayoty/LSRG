const mongoose = require("mongoose"); 


const commuterSchema = new mongoose.Schema ({
    firstName: {type: String, required: true}, 
    lastName: {type: String, required: true}, 
    phoneNumber: {type: String, required: true}, 
    email: {type: String, required: true, unique: true}, 
    password: {type: String, required: true},
    isReserved: {type: Boolean, default: false},  
    reservedTime: {type: Date, default: null, required: false}, 
    seatNo: {type: Number, default: null, required: false}, 
    seatType: {type: String, default: null, required: false}
}, 
    {timestamps: true}
); 

module.exports = mongoose.model('commuter', commuterSchema); 
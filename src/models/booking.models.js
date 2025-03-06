const mongoose = require("mongoose"); 

const bookingModel = new mongoose.Schema({
    economySeat: {type: Number}, 
    businessSeat: {type: Number}
}); 


module.exports = mongoose.model('booking', bookingModel); 


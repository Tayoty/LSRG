const admin = require("../models/admin.models"); 
const bcrypt = require("bcryptjs"); 
const seedDB = require('../utils/seed'); 
const booking = require('../models/booking.models'); 


exports.adminlogin = async (req, res) => {
    const{email, password} = req.body
    try{
        if (!email || !password){
            return res.status(400).json({message: "Input your email and password"}); 
        }; 

        const adminuser = await admin.findOne({email})
        if(!adminuser){
            return res.status(200).json({message: "This user is not an Admin"}); 
        }; 
        const passwordCheck = await bcrypt.compare(password, adminuser.password); 
        if(!passwordCheck) {
            return res.status(400).json({message: "Incorrect Password"}); 
        }; 
    } catch(error) {
        console.log(error)("Server Error")
    }; 
}; 

exports.uploadreservation = async (req, res) => {
    const {economySeat, businessSeat} = req.body
        try{
            if(!economySeat || !businessSeat){
                return res.status(400).json({message: "Input All Fields"}); 
            }
            await booking.bulkSave(); 
            return res.status(200).json({message: "Reservations Updated"});  
        } catch(error) {
            console.log(error)("Server Error")
        };
};
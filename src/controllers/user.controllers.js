const booking = require('../models/booking.models'); 
const commuter = require('../models/user.models'); 
const bcrypt = require("bcryptjs"); 


exports.signup = async (req, res) => {
    const {firstName, lastName, phoneNumber, email, password} = req.body
    try{
         if (!firstName || !lastName || !phoneNumber || !email || !password) {
            return res.status(400).json({message: "All Fields are Required"}); 
            }; 

         const existinguser = await commuter.findOne({email}); 
         if(existinguser){
            return res.status(403).json({message: "User Account Exists, Login"}); 
            }; 
    
        const hashPassword = await bcrypt.hash(password, 10); 
        const newCommuter = new commuter ({firstName, lastName, phoneNumber, email,
             password: hashPassword}); 

        await newCommuter.save(); 
        return res.status(201).json({message: "Successfully Signed up"})
    }catch(error){
        console.log(error)
        return res.status(500).json({message: "Server Error"});
    }; 
}; 

exports.login = async (req, res) => {
    const {email, password} = req.body
    try{
        if (!email || !password) {
            return res.status(400).json({message: "Input email and password"}); 
        }; 
        const user = await commuter.findOne({email})
        if(!user) {
            return res.status(404).json({message: "Account does not exist"}); 
        }; 
        const passMatch = bcrypt.compare(password, user.password)
        if(!passMatch){
            return res.status(400).json({message: "Password incorrect"}); 
        }; 
        return res.status(200).json({message: "Logged In Successfully"}); 
    } catch(error){
        console.log(error)
        return res.status(500).json({message: "Server Error"}); 
    }; 
}; 

exports.reserveseat = async (req, res) => {
    const {reservedTime, seatNo, seatType} = req.body 
    const{id} = req.query
    try{
        const reserve = await commuter.findByIdAndUpdate({_id: id}, {
            isReserved: true,
            seatNo, 
            seatType,
            reservedTime,

        }, {isNew: true})
         if (seatType === "Economy") {
            await booking.updateOne({}, { $inc: { economySeat: -1 } });
        } else if (seatType === "Business") {
            await booking.updateOne({}, { $inc: { businessSeat: -1 } });
        } 
        if(!reserve){
            return res.status(400).json({message: "Reservation Not Found"}); 
        }; 
        if(reservedTime < Date.now.toLocaleDateString){
            return res.status(400).json({message: "Book A Reserve Time In The Future"}); 
        }
        return res.status(200).json({message: "Seat Reserved"}); 
    } catch(error){
        console.log("Server Error", error.message)
        return res.status(500).json({message: "Server Error"});     
    }; 
};

exports.deletereservation = async (req, res) => {
    const {id} = req.query
    try{
        const deleted = await commuter.findByIdAndUpdate({_id: id}, {
            isReserved: false,
            seatNo: null, 
            seatType: null,
            reservedTime: null,
        }, {isNew: true})

        if(!deleted) {
            return res.status(403).json({message: "Reservation not Found"}); 
        }; 

        if(deleted){
            return res.status(200).json({message: "Reservation Deleted"}); 
        }

    }catch(error) {
        console.log(error.message) 
        return res.status(500).json({message: "Server Error"}); 
    }; 
}; 

exports.editreservation = async (req, res) => {
    const {id} = req.query
    try{
        const edit = await commuter.findByIdAndUpdate({_id: id}, {reservedTime: null}, {isNew: true})

        if(!edit) {
            return res.status(403).json({message: "Reservation not Found"}); 
        }; 
        return res.status(200).json({message: "Reservation Deleted"});
    }catch(error) {
        console.log(error)
        return res.status(500).json({message: "Server Error"}); 
    }; 
}; 

exports.services = async (req, res) => {
    try{
        const service = await booking.find(); 
        return res.status(200)
        .json({message: "Available Seats:", data:service}); 

    }catch(error){
        console.log("Server Error", error.message)
        return res.status(500).json({message: "Server Error"}); 
    }; 
}; 

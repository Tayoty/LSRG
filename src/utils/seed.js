const mongoose = require("mongoose"); 
const admin = require("../models/admin.models"); 
const bcrypt = require("bcryptjs"); 

const seedDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        await admin.create([
            {firstName: "Gabriel", email: "gabriel@seedata.com", password: "Seed4567"}, 
            {firstName: "John", email: "john@seedata.com", password: "Seed7654"}

        ]);
       console.log("Database seeded");    
    } catch(e){
        console.log("Update Admins or Server Error")
    }
};  

seedDB(); 

module.exports = seedDB; 
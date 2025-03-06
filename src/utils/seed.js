const mongoose = require("mongoose"); 
const admin = require("../models/admin.models"); 
const bcrypt = require("bcryptjs"); 

const seedDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        await admin.create([
            {firstName: "Gabriel",
             email: "gabriel@seedata.com",
             password: await bcrypt.hash("Seed4567", 10)
            }, 

            {firstName: "John",
             email: "john@seedata.com",
             password: await bcrypt.hash("Seed7654", 10)
            }

        ]);
       console.log("Database seeded");    
    } catch(e){
        console.log("Current Admins already exist")
    }
}; 


module.exports = seedDB; 
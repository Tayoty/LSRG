const mongoose = require("mongoose"); 
const admin = require("../models/admin.models"); 
const bcrypt = require("bcryptjs"); 

const seedDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        const gabrielPassword = await bcrypt.hash("Seededdata45678", 10); 
        const johnPassword = await bcrypt.hash("Seeddata45678", 10)
        await admin.create([
            {firstName: "Gabriel", email: "gabriel@seedata.com", password: gabrielPassword}, 
            {firstName: "John", email: "john@seedata.com", password: johnPassword}

        ]);
       console.log("Database seeded");    
    } catch(e){
        console.log("Update Admins or Server Error")
    }
};  

seedDB(); 
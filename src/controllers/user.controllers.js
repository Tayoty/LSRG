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
            return res.status(403).json({message: "User Acoount Exists, Login"}); 
            }; 
    
        const hashPassword = await bcrypt.hash(password, 10); 
        const newcommuter = new commuter ({firstName, lastName, phoneNumber, email,
             password: hashPassword}); 

        await newcommuter.save(); 
        return res.status(201).json({message: "Successfully Signed up"})
    }catch(error){
        console.log("Server Error")
        return res.status(500).json({message: "Server Error"});
    }
}; 





const express = require("express"); 
const dotenv = require("dotenv"); 
const morgan = require("morgan"); 
const seedDB = require("./src/utils/seed")

//setup the express app 
const app = express(); 

//setup middleware
app.use(express.json()); 
app.use(morgan("dev")); 

//start and parse environment variables
dotenv.config() 
const port = process.env.PORT 

// connect the server 
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${port}`)
}); 




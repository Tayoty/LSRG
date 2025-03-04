const express = require("express"); 
const dotenv = require("dotenv"); 
const morgan = require("morgan"); 
const seedDB = require("./src/utils/seed"); 
const commuterRoutes = require("./src/routes/user.routes"); 
const connectDB = require("./src/database/db")

//setup the express app 
const app = express(); 

//setup middleware
app.use(express.json()); 
app.use(morgan("dev")); 
app.use('/api/v1/commuter', commuterRoutes); 

//start and parse environment variables
dotenv.config() 
const port = process.env.PORT 

app.get('/', (req, res) => {
    res.send("Welcome to the LSGR API")
}); 



// connect the server 
app.listen(process.env.PORT, () => {
    connectDB(); 
    console.log(`Server is running on ${port}`)
}); 




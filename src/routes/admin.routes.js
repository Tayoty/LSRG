const express = require("express"); 
const router = express.Router(); 
const { adminlogin } = require("../controllers/admin.controllers");



router.post('/adminlogin', adminlogin); 




module.exports = router; 
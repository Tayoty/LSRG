const express = require("express"); 
const router = express.Router(); 
const { adminlogin, uploadreservation,  } = require("../controllers/admin.controllers");



router.post('/adminlogin', adminlogin); 
router.post('/uploadreservation', uploadreservation); 




module.exports = router; 
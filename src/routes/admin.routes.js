const express = require("express"); 
const router = express.Router(); 
const { adminlogin, uploadreservation, allcommuters, allbookings,  } = require("../controllers/admin.controllers");



router.post('/adminlogin', adminlogin); 
router.post('/uploadreservation', uploadreservation); 
router.get('/allcommunters', allcommuters); 
router.get('/allbookings', allbookings); 




module.exports = router; 
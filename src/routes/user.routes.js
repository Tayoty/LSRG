const express = require('express'); 
const router = express.Router(); 
const { signup, login, reserveseat, deletereservation, services, editreservation } = require('../controllers/user.controllers');


router.post('/signup', signup); 
router.post('/login', login); 
router.put('/bookseat', reserveseat); 
router.patch('/editbooking', editreservation); 
router.patch('/deletebooking', deletereservation); 
router.get('/allservices', services); 



module.exports = router; 
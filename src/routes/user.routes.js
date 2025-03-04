const express = require('express'); 
const router = express.Router(); 
const { signup, login, reserveseat, deletereservation } = require('../controllers/user.controllers');


router.post('/signup', signup); 
router.post('/login', login); 
router.put('/bookseat', reserveseat); 
router.patch('/deletebooking', deletereservation); 



module.exports = router; 
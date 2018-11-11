const express = require("express");
const router = express.Router();
const User = require("../model/update.model");

//Middleware
var userMiddleware = require('../middleware/user.middleware');

//Controller
var userController = require('../controller/user.controller');



// get all

router.get('/update', function(req, res, next){
//  console.log('get request recvd');
  User.find({}).then(function(users){
    res.header("Access-Control-Allow-Origin", "*");
    // // res.header('Access-Control-Allow-Origin', 'localhost');
    // res.header('Access-Control-Allow-Methods', 'DELETE, GET, POST, PUT, OPTIONS');
    // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    // res.header('Access-Control-Allow-Credentials', true);
    res.jsonp(users.reverse().slice(0, 20));
  }).catch(function(err){
    console.log('promise rejected');
    res.status(422).send(err);
  });
});


router.post('/update', userController.controlUserRequest);


module.exports=router;

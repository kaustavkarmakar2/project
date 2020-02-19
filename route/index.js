var express = require('express');
var app =express.Router();
var Users = require('./../server/controller/Users');

//Admin Signup Api
app.post('/signup',Users.signup);

module.exports=app;
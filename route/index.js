var express = require('express');
var app =express.Router();
var Users = require('./../server/controller/Users');


app.post('/signup',Users.signup);

module.exports=app;
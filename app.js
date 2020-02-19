
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var  bodyParser = require('body-parser');
var http = require("http");




var indexRouterApi = require('./route/index');

var cors= require('cors');
var app = express();




app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));


var server=http.Server(app);

var users= [];
server.listen(3002,function(){
  console.log("the developement server is running at 3002");
});

var whitelist = ['http://localhost','http://192.168.10.174'];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.enable('trust proxy');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(cors(corsOptionsDelegate));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api',indexRouterApi);


 app.use(function(req, res, next) {
   res.status(400).send("You seem to be confused about your doings!");
 });



module.exports = app;
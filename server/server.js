var express = require('express')
var app = express()
var mongoose = require('mongoose')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var cors = require('cors');
var serverRoutes = require('../routes.js');

//Mongoose Connection String
mongoose.connect('mongodb://mcdeav:Grahamcook1@3@ds119772.mlab.com:19772/feminaworld')

//Setting up the JSON converters and app uses

app.use(morgan('dev')) //logs every request to the console (Remove in Production)
app.use(bodyParser.urlencode({'extended' : 'true'}))
app.use(bodyParser.JSON())
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parsing methods
app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

//Routes and Management Of request and responses
//Sign Up and Login Page
serverRoutes.create(app);


Console.log("Server.js has been served.")
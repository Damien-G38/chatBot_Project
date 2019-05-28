var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
ChatBot = require('./public/javascripts/models/chatBotModel');


//Routes setup
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//database setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/chatBotC');
/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chatBotC/chatBotDB', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database");
});*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var RiveScript = require("rivescript");
var bot = new RiveScript();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ChatBot = require('./api/models/chatBotModel'); //created model loading here


bot.loadDirectory("brain");

app.use(express.static('assets'));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/chatBotC/chatBotDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/chatBotRoutes'); //importing route
routes(app); //register the route

app.listen(port);


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/adminPage', function (req, res) {
  res.sendFile(__dirname + '/adminPage.html');
});

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    bot.sortReplies();

    // And now we're free to get a reply from the brain!
    console.log("Input received: " + msg);
    var reply = bot.reply("local-user", msg);
    io.emit('chat message', reply);
    console.log("Bot response: " + reply);
  });
});

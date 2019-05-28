var express = require('express');
var router = express.Router();
var app = express();

var chatBotList = require('./../public/javascripts/controllers/chatBotController');

app.route('/chatBots')
  .get(chatBotList.list_all_chatBots)
  .post(chatBotList.create_a_chatBot);

app.route('/chatBots/:id')
  .get(chatBotList.read_a_chatBot)
  .put(chatBotList.update_a_chatBot)
  .delete(chatBotList.delete_a_chatBot);

module.exports = router;

'use strict';

var mongoose = require('mongoose');
var Chatbot = mongoose.model('ChatBots');

exports.list_all_chatBots = function(req, res) {
  ChatBot.find({}, function(err, chatBot) {
    if (err)
      res.send(err);
    res.json(chatBot);
  });
};


exports.create_a_chatBot = function(req, res) {
  var new_chatBot = new ChatBot(req.body);
  new_chatBot.save(function(err, chatBot) {
    if (err)
      res.send(err);
    res.json(chatBot);
  });
};


exports.read_a_chatBot = function(req, res) {
  ChatBot.findById(req.params.chatBotId, function(err, chatBot) {
    if (err)
      res.send(err);
    res.json(chatBot);
  });
};


exports.update_a_chatBot = function(req, res) {
  ChatBot.findOneAndUpdate({_id: req.params.chatBotId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_chatBot = function(req, res) {
  ChatBot.remove({
    _id: req.params.chatBotId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

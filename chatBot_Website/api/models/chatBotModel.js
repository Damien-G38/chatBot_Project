'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ChatBotSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the Chatbot'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  link: {
    type: String,
    required: 'Kindly enter the link of the Chatbot'
  }
});

module.exports = mongoose.model('ChatBots', ChatBotSchema);

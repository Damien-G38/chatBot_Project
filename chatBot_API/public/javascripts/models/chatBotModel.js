
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ChatBotSchema = new Schema({
  name: String,
  brain: Number,
  state: Boolean,
});

module.exports = mongoose.model('ChatBots', ChatBotSchema);

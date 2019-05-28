'use strict';

module.exports = function(app) {
var chatBotList = require('../controllers/chatBotListController');

  // todoList Routes
  app.route('/chatBots')
    .get(chatBotList.list_all_chatBots)
    .post(chatBotList.create_a_chatBot);

  app.route('/chatBots/:chatBotId')
    .get(chatBotList.read_a_chatBot)
    .put(chatBotList.update_a_chatBot)
    .delete(chatBotList.delete_a_chatBot);
};

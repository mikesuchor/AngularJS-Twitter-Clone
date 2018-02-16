(function() {
  'use strict';

  angular
    .module('app.messages')
    .component('messages', {
      templateUrl: 'app/common/messages/messages.html',
      controller: MessagesController
    });

  function MessagesController() {
  }
})();

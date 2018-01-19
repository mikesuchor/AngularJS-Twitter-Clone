function messagesController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('messages', {
    templateUrl: 'app/common/messages/messages.html',
    controller: messagesController
  });


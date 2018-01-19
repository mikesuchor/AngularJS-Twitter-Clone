angular
  .module('app')
  .component('notifications', {
    templateUrl: 'app/common/notifications/notifications.html',
    bindings: {
      tweet: '<'
    },
    controller: NotificationsController
  });

  function NotificationsController() {
    var vm = this;
    console.log(vm.tweet);
    console.log(tweet);
  }
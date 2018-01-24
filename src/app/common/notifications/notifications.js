angular
  .module('app')
  .component('notifications', {
    templateUrl: 'app/common/notifications/notifications.html',
    bindings: {
      tweets: '<'
    },
    controller: NotificationsController
  });

  function NotificationsController() {
  }

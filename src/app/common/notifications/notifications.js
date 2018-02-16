(function() {
  'use strict';

  angular
    .module('app.notifications')
    .component('notifications', {
      templateUrl: 'app/common/notifications/notifications.html',
      bindings: {
        tweets: '<'
      },
      controller: NotificationsController
    });

  function NotificationsController(TweetService) {
    var vm = this;

    vm.$onInit = function() {
      vm.promise = TweetService.getTweets().then(function(success) {
        vm.tweets = success;
      });
    };
  }
})();

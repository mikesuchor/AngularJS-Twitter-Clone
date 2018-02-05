(function() {
  'use strict';

  angular
  .module('app')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

  function MainController(TweetService, $scope) {
    var vm = this;

    vm.onComposeTweet = onComposeTweet;

    $scope.$on('NavbarUpdateTweet', function() {
      $scope.$broadcast('HomeRefreshTweets');
    })

    function onComposeTweet() {
      vm.promise = TweetService.getTweets().then(function(success) {
        vm.tweets = success;
      });
    }
  }
})();

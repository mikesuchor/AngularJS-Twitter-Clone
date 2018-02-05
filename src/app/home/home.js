(function() {
  'use strict';

  angular
  .module('app')
  .component('home', {
    templateUrl: 'app/home/home.html',
    bindings: {
      tweets: '='
    },
    controller: HomeController
  });

  function HomeController(TweetService, $scope) {
    var vm = this;

    vm.onUpdateTweet = onUpdateTweet;

    $scope.$on('NavbarUpdateTweet', function onUpdateTweet() {
      vm.promise = TweetService.getTweets().then(function(success) {
        vm.tweets = success;
      });
    });

    vm.$onInit = function() {
      vm.promise = TweetService.getTweets().then(function(success) {
        vm.tweets = success;
      });
    };

    function onUpdateTweet() {
      vm.promise = TweetService.getTweets().then(function(success) {
        vm.tweets = success;
      });
    }
  }
})();

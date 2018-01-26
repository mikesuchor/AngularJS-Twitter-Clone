(function() {
  'use strict';

  angular
  .module('app')
  .component('home', {
    templateUrl: 'app/home/home.html',
    controller: HomeController
  });

  function HomeController(TweetService) {
    var vm = this;

    vm.onUpdateTweet = onUpdateTweet;

    vm.promise = TweetService.getTweets().then(function(success) {
      vm.tweets = success;
    });

    function onUpdateTweet() {
      vm.promise = TweetService.getTweets().then(function(success) {
        vm.tweets = success;
      });
    }
  }
})();

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

    function onUpdateTweet() {
      TweetService.getTweets().then(function(success) {
        vm.tweets = success;
      });
    }

    TweetService.getTweets().then(function(success) {
      vm.tweets = success;
    });
  }
})();

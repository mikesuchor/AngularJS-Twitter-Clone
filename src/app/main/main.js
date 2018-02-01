(function() {
  'use strict';

  angular
  .module('app')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

  function MainController(TweetService) {
    var vm = this;

    vm.onComposeTweet = onComposeTweet;

    function onComposeTweet() {
      TweetService.getTweets().then(function(success) {
        vm.tweets = success;
      });
    }
  }
})();

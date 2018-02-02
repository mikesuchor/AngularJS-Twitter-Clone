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
      vm.promise = TweetService.getTweets().then(function(success) {
        vm.tweets = success;
      });
    }
  }
})();

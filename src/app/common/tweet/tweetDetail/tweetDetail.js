(function() {
  'use strict';

  angular
  .module('app')
  .component('tweetDetail', {
    templateUrl: 'app/common/tweet/tweetDetail/tweetDetail.html',
    bindings: {
      tweet: '<',
      resolve: '<'
    },
    controller: function(TweetService) {
      var vm = this;

      vm.$onInit = $onInit;
      vm.loadTweet = loadTweet;

      function $onInit() {
          vm.loadTweet();
      }

      function loadTweet() {
        TweetService.getTweetById(vm.resolve.tweet.id).then(function(success) {
          vm.tweet = success;
        });
      }
    }
  });
})();
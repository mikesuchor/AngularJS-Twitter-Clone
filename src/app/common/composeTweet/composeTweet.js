angular
.module('app')
.component('composeTweet', {
  templateUrl: 'app/common/composeTweet/composeTweet.html',
  bindings: {
    type: '@',
    onPostTweet: '&'
  },
  controller: function(TweetService) {
    var vm = this;
    vm.postTweet = function(composetweet) {
      TweetService.postTweet(composetweet).$promise.then(function(success) {
          vm.onPostTweet();
      });
    }
    vm.postTweetInteraction = function(composetweet) {
      TweetService.postTweetInteraction(composetweet).$promise.then(function(success) {
        vm.onPostTweet();
      });
    }
  }
});
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
      vm.$onInit = function () {
          vm.loadTweet();
      }
      vm.loadTweet = function () {
        TweetService.getTweetById(vm.resolve.tweet.id).then(function(success) {
          vm.tweet = success;
        });
      }
  }
});
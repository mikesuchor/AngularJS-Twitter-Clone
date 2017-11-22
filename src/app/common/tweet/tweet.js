angular
  .module('app')
  .component('tweet', {
    templateUrl: 'app/common/tweet/tweet.html',
    bindings: {
      tweet: '<',
      type: '@'
    },
    controller: function($uibModal) {
      var vm = this;
      vm.deleteTweet = function() {
        TweetService.deleteTweet()
      }
      vm.open = function() {
        $uibModal.open({
          component: "tweetDetail",
          size: 'lg',
          resolve: {
            tweet: function() {
              return vm.tweet;
            }
          }
        });
      };
    }
  });

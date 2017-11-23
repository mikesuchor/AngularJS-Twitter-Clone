angular
.module('app')
.component('tweet', {
  templateUrl: 'app/common/tweet/tweet.html',
  bindings: {
    tweet: '<',
    type: '@',
    onDeleteTweet: '&'
  },
  controller: function(TweetService, $uibModal) {
    var vm = this;
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
    vm.deleteTweet = function(id) {
      TweetService.deleteTweet(id).$promise.then(function(success) {
        vm.onDeleteTweet();
      });
    }
  }
});
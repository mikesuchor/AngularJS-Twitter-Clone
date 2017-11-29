angular
.module('app')
.component('tweet', {
  templateUrl: 'app/common/tweet/tweet.html',
  bindings: {
    tweet: '<',
    parent: '<',
    type: '@',
    onUpdateTweet: '&'
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
        vm.onUpdateTweet();
      });
    }
    vm.deleteTweetInteraction = function(parent, date) {
      TweetService.deleteTweetInteraction(parent, date).$promise.then(function(success) {
        parent.interactions.splice(parent.interactions.findIndex(function(element){return element.date == date}), 1);
        vm.onUpdateTweet();
      });
    }
  }
});
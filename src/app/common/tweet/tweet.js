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
      TweetService.deleteTweet(id).then(function(success) {
        vm.onUpdateTweet();
      });
    }
    vm.deleteTweetInteraction = function(parent, id) {
      TweetService.deleteTweetInteraction(parent, id).then(function(success) {
        var index = parent.interactions.findIndex(function(element){return element.id === id});
        parent.interactions.splice(index, 1);
        vm.onUpdateTweet();
      });
    }
  }
});
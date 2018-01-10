(function() {
  'use strict';

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
    controllerAs: 'TweetController',
    controller: function(TweetService, $uibModal) {
      var vm = this;

      vm.open = open;
      vm.deleteTweet = deleteTweet;
      vm.deleteTweetInteraction = deleteTweetInteraction;

      function open() {
        $uibModal.open({
          component: "tweetDetail",
          size: 'lg',
          resolve: {
            tweet: function() {
              return vm.tweet;
            }
          }
        });
      }

      function deleteTweet(id) {
        TweetService.deleteTweet(id).then(function(success) {
          vm.onUpdateTweet();
        });
      }

      function deleteTweetInteraction (parent, id) {
        TweetService.deleteTweetInteraction(parent, id).then(function(success) {
          var index = parent.interactions.findIndex(function(element){return element.id === id});
          parent.interactions.splice(index, 1);
          vm.onUpdateTweet();
        });
      }
    }
  });
})();
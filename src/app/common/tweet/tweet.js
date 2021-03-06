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
    controller: TweetController
  });

  function TweetController(TweetService, $uibModal) {
    var vm = this;

    vm.open = open;
    vm.deleteTweet = deleteTweet;
    vm.deleteTweetInteraction = deleteTweetInteraction;

    function open() {
      var modalInstance = $uibModal.open({
        component: 'tweetDetail',
        size: 'lg',
        resolve: {
          tweet: function() {
            return vm.tweet;
          }
        }
      });
      modalInstance.result.then(function() {
        vm.onUpdateTweet();
      });
    }

    function deleteTweet(id) {
      TweetService.deleteTweet(id).then(function() {
        vm.onUpdateTweet();
      });
    }

    function deleteTweetInteraction(parent, id) {
      TweetService.deleteTweetInteraction(parent, id).then(function() {
        var index = parent.interactions.findIndex(function(element) {
          return element.id === id;
        });
        parent.interactions.splice(index, 1);
        vm.onUpdateTweet();
      });
    }
  }
})();

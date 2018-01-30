(function() {
  'use strict';

  angular
  .module('app')
  .component('tweetDetail', {
    templateUrl: 'app/common/tweet/tweetDetail/tweetDetail.html',
    bindings: {
      tweet: '<',
      resolve: '<',
      modalInstance: '<'
    },
    controller: TweetDetailController
  });

  function TweetDetailController(TweetService) {
    var vm = this;

    vm.$onInit = $onInit;
    vm.loadTweet = loadTweet;
    vm.closeModal = closeModal;

    function $onInit() {
      vm.loadTweet();
    }

    function loadTweet() {
      vm.promise = TweetService.getTweetById(vm.resolve.tweet.id).then(function(success) {
        vm.tweet = success;
      });
    }

    function closeModal() {
      vm.modalInstance.close();
    }
  }
})();

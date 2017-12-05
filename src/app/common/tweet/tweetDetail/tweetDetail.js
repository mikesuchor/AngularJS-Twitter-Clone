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
          TweetService.getTweetById(vm.resolve.tweet.id).$promise.then(function(success) {
            vm.tweet = success;
          });
      }
  }
});
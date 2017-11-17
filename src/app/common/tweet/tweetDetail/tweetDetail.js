angular
  .module('app')
  .component('tweetDetail', {
    templateUrl: 'app/common/tweet/tweetDetail/tweetDetail.html',
    bindings: {
      tweet: '<',
      resolve: '<'
    },
    controller: function() {
      var vm = this;
      vm.$onInit = function () {
          vm.tweet = vm.resolve.tweet;
      };
    }
  });
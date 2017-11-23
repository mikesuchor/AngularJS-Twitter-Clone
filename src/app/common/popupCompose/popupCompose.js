angular
.module('app')
.component('popupCompose', {
  templateUrl: 'app/common/popupCompose/popupCompose.html',
  bindings: {
    modalInstance: "<"
  },
  controller: function(TweetService) {
    var vm = this;
    vm.postTweet = function(composetweet) {
      TweetService.postTweet(composetweet).$promise.then(function(success) {
        vm.modalInstance.close();
      });
    }
  }
});
angular
  .module('app')
  .component('popupCompose', {
    templateUrl: 'app/common/popupCompose/popupCompose.html',
    controller: function(TweetService) {
      console.log("composetweet1");
      var vm = this;
      vm.postTweet = function(composetweet) {
        console.log("composetweet2");
        TweetService.postTweet(composetweet).$promise.then(function(success) {
          // $uibModalInstance.close();
        });
      }
    }
  });


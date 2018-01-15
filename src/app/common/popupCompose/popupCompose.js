(function() {
  'use strict';

  angular
  .module('app')
  .component('popupCompose', {
    templateUrl: 'app/common/popupCompose/popupCompose.html',
    bindings: {
      modalInstance: '<'
    },
    controller: PopupComposeController
  });

  function PopupComposeController(TweetService) {
    var vm = this;

    vm.postTweet = postTweet;

    function postTweet(composetweet) {
      TweetService.postTweet(composetweet).then(function() {
        vm.modalInstance.close();
      });
    }
  }
})();

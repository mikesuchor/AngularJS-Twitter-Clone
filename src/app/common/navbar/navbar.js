(function() {
  'use strict';

  angular
  .module('app')
  .component('navbar', {
    templateUrl: 'app/common/navbar/navbar.html',
    bindings: {
      onUpdateTweet: '&'
    },
    controllerAs: 'NavbarController',
    controller: function($uibModal) {
      var vm = this;

      vm.open = open;

      function open(){
        var modalInstance = $uibModal.open({
          component: "popupCompose",
          windowClass: 'navbar-tweet-window',
          resolve: {
            tweet: function () {
              return vm.tweet;
            }
          }
        });
        modalInstance.result.then(function() {
          vm.onUpdateTweet();
        });
      };
    }
  });
})();
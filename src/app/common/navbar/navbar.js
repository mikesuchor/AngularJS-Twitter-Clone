(function() {
  'use strict';

  angular
  .module('app')
  .component('navbar', {
    templateUrl: 'app/common/navbar/navbar.html',
    controller: NavbarController
  });

  function NavbarController($uibModal, $scope) {
    var vm = this;

    vm.open = open;

    function open() {
      var modalInstance = $uibModal.open({
        component: 'popupCompose',
        resolve: {
          tweet: function() {
            return vm.tweet;
          }
        }
      });
      modalInstance.result.then(function() {
        $scope.$emit('NavbarUpdateTweet');
      });
    }
  }
})();

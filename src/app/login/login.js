(function() {
  'use strict';

  angular
    .module('app')
    .component('login', {
      templateUrl: 'app/login/login.html',
      controller: LoginController
    });

  function LoginController(LoginService, $state) {
    var vm = this;

    vm.login = login;

    function login(username, password) {
      vm.promise = LoginService.postUser(username, password).then(function(success) {
          $state.go('main');
        })
    }
  }
})();

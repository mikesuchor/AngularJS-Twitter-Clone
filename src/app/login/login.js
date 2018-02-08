(function() {
  'use strict';

  angular
    .module('app')
    .component('login', {
      templateUrl: 'app/login/login.html',
      controller: LoginController
    });

  function LoginController() {
  }
})();
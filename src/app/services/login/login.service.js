(function() {
    'use strict';

    angular
    .module('app')
    .service('LoginService', LoginService);

    function LoginService($resource, $q) {
      var vm = this;
      var expressUsersResource = $resource('http://localhost:5000/users/');

      vm.postUser = postUser;

      function postUser(username, password) {
        var deferred = $q.defer();
        expressUsersResource.save(
          {
            username: username,
            password: password
          }
        ).$promise.then(function(success, failure) {
          deferred.resolve(success);
        }, function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }
    }
  })();

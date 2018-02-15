describe('LoginService', function() {
  var $httpBackend;
  var LoginService;
  var $q;
  var deferred;
  var username;
  var password;
  var expressUsersResource = 'http://localhost:5000/users';

  beforeEach(module('app', function($provide, $translateProvider) {
    $provide.factory('customLoader', function($q) {
      return function() {
        var deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      };
    });
    $translateProvider.useLoader('customLoader');
  }));

  beforeEach(function() {
    installPromiseMatchers();
  });

  beforeEach(inject(function(_$httpBackend_, _LoginService_, _$q_) {
    $httpBackend = _$httpBackend_;
    LoginService = _LoginService_;
    $q = _$q_;
    deferred = $q.defer();
  }));

  it('should post a user after calling vm.postUser', function() {
    $httpBackend.expectPOST(expressUsersResource).respond({
      username: 'testusername',
      password: 'testpassword'
    });
    var result = LoginService.postUser(username, password);
    $httpBackend.flush();
    expect(result).toBeResolvedWith({
      username: 'testusername',
      password: 'testpassword'
    });
  });
});

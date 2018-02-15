describe('login component', function() {
  var LoginService;
  var $q;
  var deferred;
  var promise;
  var username;
  var password;

  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_, _LoginService_, _$q_) {
    $componentController = _$componentController_;
    LoginService = _LoginService_;
    $q = _$q_;
    deferred = $q.defer();
    promise = deferred.promise;
    username = 'testusername';
    password = 'testpassword';
  }));

  it('should call LoginService after attempting to login', function() {
    spyOn(LoginService, 'postUser').and.returnValue(promise);
    var ctrl = $componentController('login', LoginService);
    ctrl.login(username, password);
    expect(LoginService.postUser).toHaveBeenCalledWith(username, password);
  });
});

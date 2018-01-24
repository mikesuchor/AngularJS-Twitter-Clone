describe('notifications component', function() {
  beforeEach(module('app', function($provide) {
    $provide.factory('notifications', function() {
      return {
        templateUrl: 'app/notifications.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function($rootScope, $compile) {
    var element = $compile('<notifications></notifications>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

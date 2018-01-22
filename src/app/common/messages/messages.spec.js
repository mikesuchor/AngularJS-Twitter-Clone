describe('messages component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('messages', function () {
      return {
        templateUrl: 'app/messages.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<messages></messages>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

describe('popupCompose component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('popupCompose', function () {
      return {
        templateUrl: 'app/popupCompose.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<popupCompose></popupCompose>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
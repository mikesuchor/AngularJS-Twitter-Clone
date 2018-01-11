describe('profile component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('profile', function () {
      return {
        templateUrl: 'app/profile.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    let element = $compile('<profile></profile>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

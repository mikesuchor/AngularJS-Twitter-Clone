describe('trends component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('trends', function () {
      return {
        templateUrl: 'app/trends.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<trends></trends>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

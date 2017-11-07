describe('tweet component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('tweet', function () {
      return {
        templateUrl: 'app/tweet.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<tweet></tweet>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

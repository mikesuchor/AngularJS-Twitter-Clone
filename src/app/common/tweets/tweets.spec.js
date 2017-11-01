describe('tweets component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('tweets', function () {
      return {
        templateUrl: 'app/tweets.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<tweets></tweets>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

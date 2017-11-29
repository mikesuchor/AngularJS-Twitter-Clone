describe('composeTweet component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('composeTweet', function () {
      return {
        templateUrl: 'app/composeTweet.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<composeTweet></composeTweet>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

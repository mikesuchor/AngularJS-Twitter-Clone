describe('tweetDetail component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('tweetDetail', function () {
      return {
        templateUrl: 'app/tweetDetail.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<tweetDetail></tweetDetail>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

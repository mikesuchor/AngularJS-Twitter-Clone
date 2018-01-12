describe('follow component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('follow', function () {
      return {
        templateUrl: 'app/follow.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<follow></follow>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

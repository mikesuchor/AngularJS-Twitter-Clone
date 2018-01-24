describe('mentions component', function() {
  beforeEach(module('app', function($provide) {
    $provide.factory('mentions', function() {
      return {
        templateUrl: 'app/mentions.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function($rootScope, $compile) {
    var element = $compile('<mentions></mentions>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

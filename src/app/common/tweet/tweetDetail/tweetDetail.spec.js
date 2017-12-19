// describe('tweet component', function () {
//   beforeEach(module('app', function ($provide) {
//     $provide.factory('tweet', function () {
//       return {
//         templateUrl: 'app/tweet.html'
//       };
//     });
//   }));

//   it('should...', angular.mock.inject(function ($rootScope, $compile) {
//     var element = $compile('<tweet></tweet>')($rootScope);
//     $rootScope.$digest();
//     expect(element).not.toBeNull();
//   }));
// });

describe('tweetDetail component', function () {
  var $componentController;
  
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should load a tweet', function() {
    var ctrl = $componentController('tweetDetail', null);
    var loadTweetSpy = spyOn(ctrl, 'loadTweet');
    ctrl.loadTweet();
    expect(loadTweetSpy).toHaveBeenCalled();
  });
});
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

describe('tweet component', function () {
  var $componentController;
  
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should open a tweet detail modal', function() {
    var ctrl = $componentController('tweet', null);
    var openTweetSpy = spyOn(ctrl, 'open');
    ctrl.open();
    expect(openTweetSpy).toHaveBeenCalled();
  });

  it('should delete a tweet', function() {
    var ctrl = $componentController('tweet', null);
    var deleteTweetSpy = spyOn(ctrl, 'deleteTweet');
    ctrl.deleteTweet();
    expect(deleteTweetSpy).toHaveBeenCalled();
  });

  it('should delete a tweet interaction', function() {
    var ctrl = $componentController('tweet', null);
    var deleteTweetInteractionSpy = spyOn(ctrl, 'deleteTweetInteraction');
    ctrl.deleteTweetInteraction();
    expect(deleteTweetInteractionSpy).toHaveBeenCalled();
  });
});
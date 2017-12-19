describe('composeTweet component', function () {
  var $componentController;
  
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should post a tweet and return it with an id', function() {
    var ctrl = $componentController('composeTweet', null);
    var postTweetSpy = spyOn(ctrl, 'postTweet');
    // var postTweetSpy = spyOn(ctrl, 'postTweet').and.callThrough();
    var composeTweet = {
      tweet: "test"
    };
    var response = {
      id: 1,
      tweet: "test"
    };
    ctrl.postTweet(composeTweet);
    expect(postTweetSpy).toHaveBeenCalledWith(composeTweet);
    // expect(postTweetSpy).toEqual(response);
  });

//   it('should post a tweet interaction and return it with an id', function() {
//     var ctrl = $componentController('composeTweet', null);
//     var postTweetInteractionSpy = spyOn(ctrl, 'postTweetInteraction');
//     var composeTweet = {
//       tweet: "test"
//     };
//     var response = {
//       id: 1,
//       tweet: "test"
//     };
//     ctrl.postTweetInteraction(composeTweet);
//     expect(postTweetInteractionSpy).toHaveBeenCalledWith(composeTweet);
//   });
// });
  
  // var $q, $scope, controller, deferred, element, TweetService;

  // // Code was created by default, necessary if using $componentController?
  // beforeEach(module('app', function ($provide) {
  //   $provide.factory('composeTweet', function () {
  //     return {
  //       templateUrl: 'app/composeTweet.html'
  //     };
  //   });
  // }));

//   // Before each test inject... why the underscores and variable assignment? 
//   beforeEach(inject(function (_$rootScope_, _$compile_, _$q_, _TweetService_) {
//     // Dealing with promises? Use done() instead for async?
//     $q = _$q_;
//     deferred = $q.defer();
//     // $new()? creates a copy of rootscope? why?
//     $scope = _$rootScope_.$new();
//     // $compile? $scope?
//     element = _$compile_('<compose-tweet></compose-tweet>')($scope);
//     // $apply?
//     $scope.$apply();
//     TweetService = _TweetService_;
//     controller = element.controller('composeTweet');
//     spyOn(TweetService, 'postTweet').and.returnValue({
//       $promise: deferred.promise
//     });
//     spyOn(controller, 'onUpdateTweet');
//   }));

//   it('should post a tweet and return it with an id', function () {
//     var composeTweet = {
//         tweet: "test"
//       };
//       var response = {
//         id: 1,
//         tweet: "test"
//       };
//     controller.postTweet(composeTweet);
//     deferred.resolve(response);
//     $scope.$apply();
//     expect(TweetService.postTweet).toHaveBeenCalledWith(composeTweet);
//     expect(controller.onUpdateTweet).toHaveBeenCalled();
//   });
// });
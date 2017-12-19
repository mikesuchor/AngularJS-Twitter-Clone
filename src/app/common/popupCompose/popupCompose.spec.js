describe('popupCompose component', function () {
    var $componentController;
    
    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_) {
      $componentController = _$componentController_;
    }));
  
    it('should post a tweet and return it with an id', function() {
      var ctrl = $componentController('popupCompose', null);
      var postTweetSpy = spyOn(ctrl, 'postTweet');
      var composeTweet = {
        tweet: "test"
      };
      var response = {
        id: 1,
        tweet: "test"
      };
      ctrl.postTweet(composeTweet);
      expect(postTweetSpy).toHaveBeenCalledWith(composeTweet);
    });
  });

// describe('popupCompose component', function () {
//   var $q, $scope, controller, deferred, element, TweetService;

//   beforeEach(module('app', function ($provide) {
//     $provide.factory('popupCompose', function () {
//       return {
//         templateUrl: 'app/popupCompose.html'
//       };
//     });
//   }));
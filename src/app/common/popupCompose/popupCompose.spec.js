describe('popupCompose component', function () {
    var $componentController, $q;
    var deferred, promise;
    
    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_, _TweetService_, _$q_) {
      $componentController = _$componentController_;
      TweetService = _TweetService_;
      $q = _$q_;
      deferred = $q.defer();
      promise = deferred.promise;
    }));
  
    it('should call TweetService after posting a tweet', function() {
      spyOn(TweetService, 'postTweet').and.returnValue(promise);
      var ctrl = $componentController('popupCompose', TweetService);
      var composeTweet = { tweet: "test" };
      ctrl.postTweet(composeTweet);
      expect(TweetService.postTweet).toHaveBeenCalledWith(composeTweet);
    });
  });
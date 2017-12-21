describe('tweetDetail component', function () {
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

  it('should call TweetService after loading a tweet', function() {
    var bindings = {
      resolve: {
        tweet: {
          id: 1
        }
      }
    };
    spyOn(TweetService, 'getTweetById').and.returnValue(promise);
    var ctrl = $componentController('tweetDetail', TweetService, bindings);
    ctrl.loadTweet();
    expect(TweetService.getTweetById).toHaveBeenCalledWith(1);
  });
});
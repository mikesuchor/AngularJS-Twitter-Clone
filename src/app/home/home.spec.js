describe('home component', function() {
  var $componentController;
  var TweetService;
  var $q;
  var deferred;
  var promise;

  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_, _TweetService_, _$q_) {
    $componentController = _$componentController_;
    TweetService = _TweetService_;
    $q = _$q_;
    deferred = $q.defer();
    promise = deferred.promise;
  }));

  it('should call TweetService to get tweets', function() {
    spyOn(TweetService, 'getTweets').and.returnValue(promise);
    TweetService.getTweets();
    expect(TweetService.getTweets).toHaveBeenCalled();
  });

  it('should call TweetService to get tweets after updating a tweet', function() {
    spyOn(TweetService, 'getTweets').and.returnValue(promise);
    var ctrl = $componentController('home', TweetService);
    ctrl.onUpdateTweet();
    expect(TweetService.getTweets).toHaveBeenCalled();
  });
});

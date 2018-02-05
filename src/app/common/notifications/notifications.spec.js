describe('notifications component', function() {
  var TweetService;
  var $q;
  var deferred;
  var promise;

  beforeEach(module('app'));
  beforeEach(inject(function(_TweetService_, _$q_) {
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
});

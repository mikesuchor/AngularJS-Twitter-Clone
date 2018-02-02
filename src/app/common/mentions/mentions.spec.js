describe('mentions component', function() {
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

  it('should call TweetService to get mentions', function() {
    spyOn(TweetService, 'getMentions').and.returnValue(promise);
    TweetService.getMentions();
    expect(TweetService.getMentions).toHaveBeenCalled();
  });
});

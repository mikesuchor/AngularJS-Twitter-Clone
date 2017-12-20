describe('composeTweet component', function () {
  var $componentController;
  var $q;
  
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_, _TweetService_, _$q_) {
    $componentController = _$componentController_;
    TweetService = _TweetService_;
    $q = _$q_;
  }));

  it('should call TweetService after post a tweet', function() {
    var composeTweet = {
      tweet: "test"
    };
    var deferred = $q.defer();
    var promise = deferred.promise;
    spyOn(TweetService, 'postTweet').and.returnValue(promise);
    var ctrl = $componentController('composeTweet', TweetService);
    ctrl.postTweet(composeTweet);
    expect(TweetService.postTweet).toHaveBeenCalledWith(composeTweet);
  });
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
// });`
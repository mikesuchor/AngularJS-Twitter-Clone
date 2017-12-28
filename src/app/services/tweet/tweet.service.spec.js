describe('TweetService service', function () {
  var $httpBackend, $q;
  var id = 1;
  var interactionId = 1;
  var tweet = {id: 1};
  var parent = {id: 1};
  var composetweet = "testcomposetweet";
  var expressTweetResource = 'http://localhost:5000/tweets';
  var expressTweetResourceWithId = 'http://localhost:5000/tweets/' + id;

  beforeEach(module('app'));
  beforeEach(function() {
    installPromiseMatchers();
  });
  beforeEach(inject(function(_$httpBackend_, _TweetService_, _$q_) {
    $httpBackend = _$httpBackend_;
    TweetService = _TweetService_;
    $q = _$q_;
    deferred = $q.defer();
    promise = deferred.promise;
  }));

  describe('vm.getTweets', function () {
    it('should return an array containing all tweets and reverse the array', function() {
      deferred.resolve();
      $httpBackend.expectGET(expressTweetResource).respond([{id: 1}, {id: 2}, {id: 3}]);
      var result = TweetService.getTweets();
      $httpBackend.flush();
      expect(result).toBeResolvedWith([{id: 3}, {id: 2}, {id: 1}]);
    });
  });

  describe('vm.getTweetById', function () {
    it('should return an object by its id', function() {
      $httpBackend.expectGET(expressTweetResourceWithId).respond({photo:":)", name:"A", handle:"@abc", id:id});
      var result = TweetService.getTweetById(id);
      $httpBackend.flush();
      expect(result).toBeResolvedWith({photo:":)", name:"A", handle:"@abc", id:id});
    });
  });

  describe('vm.postTweet', function () {
    it('should post a tweet', function() {
      $httpBackend.expectPOST(expressTweetResource).respond({photo: "https://pbs.twimg.com/profile_images/821536751642673153/JlEInrNR_bigger.jpg",
      name: "Michael Suchorolski",
      handle: "mikesuchor",
      tweet: composetweet});
      var result = TweetService.postTweet(composetweet);
      $httpBackend.flush();
      expect(result).toBeResolvedWith({photo: "https://pbs.twimg.com/profile_images/821536751642673153/JlEInrNR_bigger.jpg",
      name: "Michael Suchorolski",
      handle: "mikesuchor",
      tweet: composetweet});
    });
  });

  describe('vm.deleteTweet', function () {
    it('should delete a tweet using its id', function() {
      $httpBackend.expectDELETE(expressTweetResourceWithId).respond({photo:":)", name:"A", handle:"@abc", id:id});
      var result = TweetService.deleteTweet(id);
      $httpBackend.flush();
      expect(result).toBeResolvedWith({photo:":)", name:"A", handle:"@abc", id:id});
    });
  });

  describe('vm.postTweetInteraction', function () {
    it('should post a tweet interaction to a tweet', function() {
      $httpBackend.expectPOST(expressTweetResourceWithId).respond({id: tweet.id, tweet: composetweet});
      var result = TweetService.postTweetInteraction(tweet, composetweet);
      $httpBackend.flush();
      expect(result).toBeResolvedWith({id: tweet.id, tweet: composetweet});
    });
  });

  describe('vm.deleteTweetInteraction', function () {
    it('should delete a tweet interaction', function() {
      $httpBackend.expectDELETE(expressTweetResourceWithId + '/' + interactionId).respond({id: parent.id, interactionId: id});
      var result = TweetService.deleteTweetInteraction(parent, id);
      $httpBackend.flush();
      expect(result).toBeResolvedWith({id: parent.id, interactionId: id});
    });
  });
});

describe('TweetService', function() {
  var $httpBackend;
  var TweetService;
  var $q;
  var deferred;
  var interactionId;
  var tweet;
  var parent;
  var composetweet;
  var id = 1;
  var expressTweetResource = 'http://localhost:5000/tweets';
  var expressTweetResourceWithId = 'http://localhost:5000/tweets/' + id;

  beforeEach(module('app', function($provide, $translateProvider) {
    $provide.factory('customLoader', function($q) {
      return function() {
        var deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      };
    });
    $translateProvider.useLoader('customLoader');
  }));

  beforeEach(function() {
    installPromiseMatchers();
  });

  beforeEach(inject(function(_$httpBackend_, _TweetService_, _$q_) {
    $httpBackend = _$httpBackend_;
    TweetService = _TweetService_;
    $q = _$q_;
    deferred = $q.defer();
    id = 1;
    interactionId = 1;
    tweet = {id: 1};
    parent = {id: 1};
    composetweet = 'testcomposetweet';
  }));

  it('should return a reversed array containing all the tweets after calling vm.getTweets', function() {
    deferred.resolve();
    $httpBackend.expectGET(expressTweetResource).respond([{id: 1}, {id: 2}, {id: 3}]);
    var result = TweetService.getTweets();
    $httpBackend.flush();
    expect(result).toBeResolvedWith([{id: 3}, {id: 2}, {id: 1}]);
  });

  it('should return an object by its id after calling vm.getTweetById', function() {
    $httpBackend.expectGET(expressTweetResourceWithId).respond({
      photo: ':)',
      name: 'A',
      username: '@abc',
      id: id
    });
    var result = TweetService.getTweetById(id);
    $httpBackend.flush();
    expect(result).toBeResolvedWith({
      photo: ':)',
      name: 'A',
      username: '@abc',
      id: id
    });
  });

  it('should post a tweet after calling vm.postTweet', function() {
    $httpBackend.expectPOST(expressTweetResource).respond({
      photo: '/images/profile_images/JlEInrNR_bigger.jpg',
      name: 'Michael Suchorolski',
      username: 'mikesuchor',
      tweet: composetweet
    });
    var result = TweetService.postTweet(composetweet);
    $httpBackend.flush();
    expect(result).toBeResolvedWith({
      photo: '/images/profile_images/JlEInrNR_bigger.jpg',
      name: 'Michael Suchorolski',
      username: 'mikesuchor',
      tweet: composetweet
    });
  });

  it('should delete a tweet using its id after calling vm.deleteTweet', function() {
    $httpBackend.expectDELETE(expressTweetResourceWithId).respond({
      photo: ':)',
      name: 'A',
      username: '@abc',
      id: id
    });
    var result = TweetService.deleteTweet(id);
    $httpBackend.flush();
    expect(result).toBeResolvedWith({
      photo: ':)',
      name: 'A',
      username: '@abc',
      id: id
    });
  });

  it('should post a tweet interaction to a tweet after calling vm.postTweetInteraction', function() {
    $httpBackend.expectPOST(expressTweetResourceWithId).respond({
      id: tweet.id,
      tweet: composetweet
    });
    var result = TweetService.postTweetInteraction(tweet, composetweet);
    $httpBackend.flush();
    expect(result).toBeResolvedWith({
      id: tweet.id,
      tweet: composetweet
    });
  });

  it('should delete a tweet interaction after calling vm.deleteTweetInteraction', function() {
    $httpBackend.expectDELETE(expressTweetResourceWithId + '/' + interactionId).respond({
      id: parent.id,
      interactionId: id
    });
    var result = TweetService.deleteTweetInteraction(parent, id);
    $httpBackend.flush();
    expect(result).toBeResolvedWith({
      id: parent.id,
      interactionId: id
    });
  });
});

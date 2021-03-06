describe('composeTweet component', function() {
  var $componentController;
  var TweetService;
  var $q;
  var $scope;
  var deferred;
  var promise;
  var tweet;
  var text;
  var composeTweet;

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

  beforeEach(inject(function(_$componentController_, _TweetService_, _$q_, _$rootScope_) {
    $componentController = _$componentController_;
    TweetService = _TweetService_;
    $q = _$q_;
    $scope = _$rootScope_.$new();
    deferred = $q.defer();
    promise = deferred.promise;
    tweet = {tweet: 'test'};
    text = 'test';
    composeTweet = {
      photo: '/images/profile_images/JlEInrNR_bigger.jpg',
      name: 'Michael Suchorolski',
      username: 'mikesuchor',
      time: 'testing',
      replyingto: 'testing',
      tweet: text,
      date: new Date().toString()
    };
  }));

  it('should call TweetService after posting a tweet', function() {
    spyOn(TweetService, 'postTweet').and.returnValue(promise);
    var ctrl = $componentController('composeTweet', TweetService);
    composeTweet = {tweet: 'test'};
    ctrl.postTweet(composeTweet);
    expect(TweetService.postTweet).toHaveBeenCalledWith(composeTweet);
  });

  it('should call TweetService after posting a tweet interaction', function() {
    spyOn(TweetService, 'postTweetInteraction').and.returnValue(promise);
    var ctrl = $componentController('composeTweet', TweetService);
    ctrl.postTweetInteraction(tweet, text);
    expect(TweetService.postTweetInteraction).toHaveBeenCalledWith(tweet, composeTweet);
  });

  it('should add a tweet into interactions array after resolving postTweetInteraction', function() {
    var onUpdateTweetSpy = jasmine.createSpy('onUpdateTweet');
    var bindings = {onUpdateTweet: onUpdateTweetSpy};
    spyOn(TweetService, 'postTweetInteraction').and.returnValue(promise);
    var ctrl = $componentController('composeTweet', TweetService, bindings);
    ctrl.postTweetInteraction(tweet, text);
    deferred.resolve();
    $scope.$apply();
    expect(tweet.interactions.length).toEqual(1);
  });

  it('should run onUpdate() after resolving postTweetInteraction', function() {
    var onUpdateTweetSpy = jasmine.createSpy('onUpdateTweet');
    var bindings = {onUpdateTweet: onUpdateTweetSpy};
    spyOn(TweetService, 'postTweetInteraction').and.returnValue(promise);
    var ctrl = $componentController('composeTweet', TweetService, bindings);
    ctrl.postTweetInteraction(tweet, text);
    deferred.resolve();
    $scope.$apply();
    expect(onUpdateTweetSpy).toHaveBeenCalled();
  });
});

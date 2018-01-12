describe('tweetDetail component', function () {
  var $componentController;
  var TweetService;
  var $q;
  var $scope;
  var deferred;
  var promise;

  beforeEach(module('app'));
  beforeEach(inject(function (_$componentController_, _TweetService_, _$q_, _$rootScope_) {
    $componentController = _$componentController_;
    TweetService = _TweetService_;
    $q = _$q_;
    $scope = _$rootScope_.$new();
    deferred = $q.defer();
    promise = deferred.promise;
  }));

  it('should call TweetService after loading a tweet', function () {
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

  it('should store the results of the promise in ctrl.tweet after loading a tweet', function () {
    var bindings = {
      resolve: {
        tweet: {
          name: 'hello',
          id: 1
        }
      }
    };
    spyOn(TweetService, 'getTweetById').and.returnValue(promise);
    var ctrl = $componentController('tweetDetail', TweetService, bindings);
    ctrl.loadTweet();
    deferred.resolve();
    $scope.$apply();
    expect(ctrl.tweet).toEqual(ctrl.success);
  });
});

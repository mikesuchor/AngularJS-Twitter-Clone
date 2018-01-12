describe('popupCompose component', function() {
  var $componentController;
  var TweetService;
  var $q;
  var $scope;
  var deferred;
  var promise;

  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_, _TweetService_, _$q_, _$rootScope_) {
    $componentController = _$componentController_;
    TweetService = _TweetService_;
    $q = _$q_;
    $scope = _$rootScope_.$new();
    deferred = $q.defer();
    promise = deferred.promise;
  }));

  it('should call TweetService after posting a tweet', function() {
    spyOn(TweetService, 'postTweet').and.returnValue(promise);
    var ctrl = $componentController('popupCompose', TweetService);
    var composeTweet = {tweet: 'test'};
    ctrl.postTweet(composeTweet);
    expect(TweetService.postTweet).toHaveBeenCalledWith(composeTweet);
  });

  it('should call modalInstance.close after posting a tweet', function() {
    var onCloseSpy = jasmine.createSpy('onClose');
    var bindings = {
      modalInstance: {
        close: onCloseSpy
      }
    };
    spyOn(TweetService, 'postTweet').and.returnValue(promise);
    var ctrl = $componentController('popupCompose', TweetService, bindings);
    var composeTweet = {tweet: 'test'};
    ctrl.postTweet(composeTweet);
    deferred.resolve();
    $scope.$apply();
    expect(onCloseSpy).toHaveBeenCalled();
  });
});

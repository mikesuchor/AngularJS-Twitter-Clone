describe('popupCompose component', function () {
  let $componentController;
  let $q;
  let $scope;
  let deferred;
  let promise;
  
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
    let ctrl = $componentController('popupCompose', TweetService);
    let composeTweet = {tweet: "test"};
    ctrl.postTweet(composeTweet);
    expect(TweetService.postTweet).toHaveBeenCalledWith(composeTweet);
  });

  it('should call modalInstance.close after posting a tweet', function() {
    let onCloseSpy = jasmine.createSpy('onClose');
    let bindings = {
      modalInstance: {
        close: onCloseSpy
      }
    };
    spyOn(TweetService, 'postTweet').and.returnValue(promise);
    let ctrl = $componentController('popupCompose', TweetService, bindings);
    let composeTweet = {tweet: "test"};
    ctrl.postTweet(composeTweet);
    deferred.resolve();
    $scope.$apply();
    expect(onCloseSpy).toHaveBeenCalled();
  });
});
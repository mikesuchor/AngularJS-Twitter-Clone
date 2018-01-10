describe('tweet component', function () {
  var $componentController;
  var $q;
  var $scope;
  var deferred;
  var promise;
  var parent;
  var id;
  
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_, _TweetService_, _$uibModal_, _$q_, _$rootScope_) {
    $componentController = _$componentController_;
    TweetService = _TweetService_;
    $uibModal = _$uibModal_;
    $q = _$q_;
    $scope = _$rootScope_.$new();
    deferred = $q.defer();
    promise = deferred.promise;
    parent = {
      interactions: [{id: 1}]
    };
    id = 1;
  }));

  it('should open a tweet detail modal', function() {
    var ctrl = $componentController('tweet', $uibModal);
    spyOn($uibModal, 'open');
    ctrl.open();
    expect($uibModal.open).toHaveBeenCalled();
  });

  it('should call TweetService after deleting a tweet', function() {
    spyOn(TweetService, 'deleteTweet').and.returnValue(promise);
    var ctrl = $componentController('tweet', TweetService);
    ctrl.deleteTweet(id);
    expect(TweetService.deleteTweet).toHaveBeenCalledWith(id);
  });

  it('should call TweetService after deleting a tweet interaction', function() {
    spyOn(TweetService, 'deleteTweetInteraction').and.returnValue(promise);
    var ctrl = $componentController('tweet', TweetService);
    ctrl.deleteTweetInteraction(parent, id);
    expect(TweetService.deleteTweetInteraction).toHaveBeenCalledWith(parent, id);
  });

  /* Requires ES6 for findIndex method */
  it('should splice an interaction by id after resolving deleteTweetInteraction', function() {
    var onUpdateTweetSpy = jasmine.createSpy('onUpdateTweet');
    var bindings = {onUpdateTweet: onUpdateTweetSpy};
    spyOn(TweetService, 'deleteTweetInteraction').and.returnValue(promise);
    var ctrl = $componentController('tweet', TweetService, bindings);
    ctrl.deleteTweetInteraction(parent, id);
    deferred.resolve();
    $scope.$apply();
    expect(parent.interactions.length).toEqual(0);
  });

  /* Requires ES6 for findIndex method */
  it('should run onUpdate() after resolving deleteTweetInteraction', function() {
    var onUpdateTweetSpy = jasmine.createSpy('onUpdateTweet');
    var bindings = {onUpdateTweet: onUpdateTweetSpy};
    spyOn(TweetService, 'deleteTweetInteraction').and.returnValue(promise);
    var ctrl = $componentController('tweet', TweetService, bindings);
    ctrl.deleteTweetInteraction(parent, id);
    deferred.resolve();
    $scope.$apply();
    expect(onUpdateTweetSpy).toHaveBeenCalled();
  });
});
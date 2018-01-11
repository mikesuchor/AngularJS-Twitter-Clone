describe('navbar component', function () {
  let $componentController;
  let $q;
  let $scope;
  let deferred;
  let promise;
  
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_, _$q_, _$rootScope_, _$uibModal_) {
    $componentController = _$componentController_;
    $q = _$q_;
    $scope = _$rootScope_.$new();
    $uibModal = _$uibModal_;
    deferred = $q.defer();
    promise = deferred.promise;
  }));

  it('should open a modal when clicking the tweet button', function() {
    let onUpdateTweetSpy = jasmine.createSpy('onUpdateTweet');
    let bindings = {onUpdateTweet: onUpdateTweetSpy};
    spyOn($uibModal, 'open').and.returnValue({result: promise});
    let ctrl = $componentController('navbar', $uibModal, bindings);
    ctrl.open();
    deferred.resolve();
    $scope.$apply();
    expect($uibModal.open).toHaveBeenCalled();
  });

  it('should run onUpdateTweet function after opening the modal', function() {
    let onUpdateTweetSpy = jasmine.createSpy('onUpdateTweet');
    let bindings = {onUpdateTweet: onUpdateTweetSpy};
    spyOn($uibModal, 'open').and.returnValue({result: promise});
    let ctrl = $componentController('navbar', $uibModal, bindings);
    ctrl.open();
    deferred.resolve();
    $scope.$apply();
    expect(onUpdateTweetSpy).toHaveBeenCalled();
  });
});
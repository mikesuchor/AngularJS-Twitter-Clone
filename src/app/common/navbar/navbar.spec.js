describe('navbar component', function() {
  var $componentController;
  var $q;
  var $uibModal;
  var $scope;
  var deferred;
  var promise;

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
    var onUpdateTweetSpy = jasmine.createSpy('onUpdateTweet');
    var bindings = {onUpdateTweet: onUpdateTweetSpy};
    spyOn($uibModal, 'open').and.returnValue({result: promise});
    var ctrl = $componentController('navbar', $uibModal, bindings);
    ctrl.open();
    deferred.resolve();
    $scope.$apply();
    expect($uibModal.open).toHaveBeenCalled();
  });
});

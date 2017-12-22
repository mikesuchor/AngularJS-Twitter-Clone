describe('navbar component', function () {
  var $componentController, $q, $scope;
  var deferred, promise;
  
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_, _$q_, _$rootScope_, _$uibModal_) {
    $componentController = _$componentController_;
    $q = _$q_;
    $scope = _$rootScope_.$new();
    $uibModal = _$uibModal_;
    deferred = $q.defer();
    promise = deferred.promise;
  }));

  xit('should open a modal when clicking the tweet button', function() {
    spyOn($uibModal, 'open').and.returnValue(promise);
    var ctrl = $componentController('navbar', $uibModal);
    ctrl.open();
    deferred.resolve();
    $scope.$apply();
    expect($uibModal.open).toHaveBeenCalled();
  });
});
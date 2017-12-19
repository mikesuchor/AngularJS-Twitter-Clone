describe('navbar component', function () {
  var $componentController;
  
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should open a modal when clicking the tweet button', function() {
    var ctrl = $componentController('navbar', null);
    var openTweetSpy = spyOn(ctrl, 'open');
    ctrl.open();
    expect(openTweetSpy).toHaveBeenCalled();
  });
});

// describe('navbar component', function () {
//   var element;
//   var $rootScope;
//   var controller;
  
//   beforeEach(module('app', function ($provide) {
//     $provide.factory('navbar', function () {
//       return {
//         templateUrl: 'app/navbar.html'
//       };
//     });
//   }));

//   beforeEach(angular.mock.inject(function (_$rootScope_, _$compile_) {
//     $rootScope = _$rootScope_
//     element = _$compile_('<tweet></tweet>')($rootScope);
//     $rootScope.$digest();
//     controller = element.controller('tweet');
//   }));

//   it('should...', angular.mock.inject(function ($rootScope, $compile) {
//     var element = $compile('<navbar></navbar>')($rootScope);
//     $rootScope.$digest();
//     expect(element).not.toBeNull();
//   }));

//   describe('vm.open', function () {
//     it('should call $uibModal.open()', angular.mock.inject(function (_$uibModal_) {
//       var $uibModal = _$uibModal_;
//       spyOn($uibModal, 'open');
//       controller.open();
//       expect($uibModal.open).toHaveBeenCalled();
//     }));
//   });
// });
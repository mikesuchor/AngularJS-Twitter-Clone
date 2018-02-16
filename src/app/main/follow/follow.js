(function() {
  'use strict';

  angular
  .module('app')
  .component('follow', {
    templateUrl: 'app/main/follow/follow.html',
    controller: FollowController
  });

  function FollowController() {
    var vm = this;
    vm.follow = [
      {
        photo: '/images/profile_images/3Ghh7TKT_bigger.jpg',
        name: 'Francesco',
        username: 'Fragno92'
      }, {
        photo: '/images/profile_images/p7K_iGym_bigger.jpg',
        name: 'Treehouse',
        username: 'Treehouse'
      }, {
        photo: '/images/profile_images/RZVVM3TO_bigger.jpg',
        name: 'JayHouston',
        username: 'JayHouston'
      }
    ];
  }
})();

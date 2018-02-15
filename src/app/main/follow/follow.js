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
        photo: 'https://pbs.twimg.com/profile_images/696357709361188864/3Ghh7TKT_bigger.jpg',
        name: 'Francesco',
        username: 'Fragno92'
      }, {
        photo: 'https://pbs.twimg.com/profile_images/896061559788552192/p7K_iGym_bigger.jpg',
        name: 'Treehouse',
        username: 'Treehouse'
      }, {
        photo: 'https://pbs.twimg.com/profile_images/930793337178808320/RZVVM3TO_400x400.jpg',
        name: 'JayHouston',
        username: 'JayHouston'
      }
    ];
  }
})();

(function() {
  'use strict';

  angular
  .module('app')
  .component('profile', {
    templateUrl: 'app/main/profile/profile.html',
    controller: ProfileController
  });

  function ProfileController() {
    var vm = this;
    vm.profile = {
      photo: '/images/profile_images/JlEInrNR_bigger.jpg',
      name: 'Michael Suchorolski',
      username: 'mikesuchor',
      tweets: 91,
      following: 62,
      followers: 159
    };
  }
})();

(function() {
  'use strict';

  angular
  .module('app')
  .component('profile', {
    templateUrl: 'app/home/profile/profile.html',
    controllerAs: 'ProfileController',
    controller: function() {
      let vm = this;
      vm.profile = {
        photo: "https://pbs.twimg.com/profile_images/821536751642673153/JlEInrNR_bigger.jpg",
        name: "Michael Suchorolski",
        handle: "mikesuchor",
        tweets: 91,
        following: 62,
        followers: 159,
      }
    }
  });
})();
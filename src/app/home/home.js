(function() {
  'use strict';

  angular
  .module('app.home')
  .component('home', {
    templateUrl: 'app/home/home.html',
    bindings: {
      tweets: '='
    },
    controller: HomeController
  });

  function HomeController(TweetService, $scope) {
    var vm = this;

    vm.onUpdateTweet = onUpdateTweet;

    vm.$onInit = onUpdateTweet();

    $scope.$on('HomeRefreshTweets', onUpdateTweet);

    function onUpdateTweet() {
      vm.promise = TweetService.getTweets().then(function(success) {
        vm.tweets = success;
      });
    }
  }
})();

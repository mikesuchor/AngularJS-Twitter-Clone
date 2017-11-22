angular
.module('app')
.component('home', {
  templateUrl: 'app/home/home.html',
  controller: function($scope, TweetService, $uibModalInstance) {
    var vm = this;
    TweetService.getTweets().$promise.then(function(success) {
      vm.tweets = success;
    });
    vm.onPostTweet = function() {
      TweetService.getTweets().$promise.then(function(success) {
        vm.tweets = success;
      });
    }
    $scope.$on('tweetcreated', function() {
      TweetService.getTweets().$promise.then(function(success) {
        vm.tweets = success;
      });
    });
    
}
});
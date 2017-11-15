angular
.module('app')
.service('TweetService', TweetService);

function TweetService($http) {
  var vm = this;
  var tweets;
  vm.getTweets = function() {
    return $http.get('db.json');
  }
}
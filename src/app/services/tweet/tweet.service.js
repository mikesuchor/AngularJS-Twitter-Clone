angular
.module('app')
.service('TweetService', TweetService);

function TweetService($resource) {
  var vm = this;
  vm.getTweets = function() {
    return $resource('http://localhost:4000/tweets/').query(function(data){});
  }
}
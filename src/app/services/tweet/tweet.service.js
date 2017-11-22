angular
.module('app')
.service('TweetService', TweetService);

function TweetService($resource) {
  var vm = this;
  vm.getTweets = function() {
    return $resource('http://localhost:4000/tweets/').query(function(data){
      data.reverse();
    });
  }
  vm.postTweet = function(composetweet) {
    return $resource('http://localhost:4000/tweets/').save(
      {
        photo: "https://pbs.twimg.com/profile_images/821536751642673153/JlEInrNR_bigger.jpg",
        name: "Michael Suchorolski",
        handle: "mikesuchor",
        tweet: composetweet
      }, function(response) {return response.handle});
  }
  vm.deleteTweet = function() {
    return $resource('http://localhost:4000/tweets/').delete(function(data){
    });
  }
}
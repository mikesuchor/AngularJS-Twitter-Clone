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
  vm.postTweetInteraction = function(composereply) {
    return $resource('http://localhost:4000/tweets/20').save(
      {
        interactions: [
          {
            photo: "https://pbs.twimg.com/profile_images/821536751642673153/JlEInrNR_bigger.jpg",
            name: "Michael Suchorolski",
            handle: "mikesuchor",
            time: "testing",
            replyingto: "testing",
            tweet: composereply
          }
        ]
      }, function(response) {return response.handle});
  }
  vm.deleteTweet = function(id) {
    return $resource('http://localhost:4000/tweets/' + id).delete(function(data){
    });
  }
  vm.deleteTweetInteraction = function(id) {
    return $resource('http://localhost:4000/tweets/' + id).delete(function(data){
    });
  }
}
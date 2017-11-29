angular
.module('app')
.service('TweetService', TweetService);

function TweetService($resource) {
  var vm = this;
  var tweetsUrl = $resource('http://localhost:4000/tweets');
  var singleTweetUrl = $resource('http://localhost:4000/tweets/:id', {id: '@id'});

  vm.getTweets = function() {
    return tweetsUrl.query(function(data){
      data.reverse();
    });
  }
  
  vm.postTweet = function(composetweet) {
    return tweetsUrl.save(
      {
        photo: "https://pbs.twimg.com/profile_images/821536751642673153/JlEInrNR_bigger.jpg",
        name: "Michael Suchorolski",
        handle: "mikesuchor",
        tweet: composetweet
      }, function(response) {return response.handle});
  }

  vm.deleteTweet = function(id) {
    return singleTweetUrl.delete({id: id}, function(data){
    });
  }

  vm.postTweetInteraction = function(tweet, composetweet) {
    return $resource('http://localhost:4000/tweets/' + tweet.id, null, {
      'update': { method:'PUT' }
    }).update(tweet);
  }

  vm.deleteTweetInteraction = function(parent, date) {
    return $resource('http://localhost:4000/tweets/' + parent.id, null, {
      'update': { method:'PUT' }
    }).update(parent);
  }
}
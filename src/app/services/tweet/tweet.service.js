angular
.module('app')
.service('TweetService', TweetService);

function TweetService($resource) {
  var vm = this;
  var expressTweetResource = $resource('http://localhost:5000/tweets/:id', {id: '@id'});
  var tweetResource = $resource('http://localhost:4000/tweets/:id', {id: '@id'}, {
    'update': { method:'PUT' }
  });

  vm.getTweets = function() {
    return expressTweetResource.query(function(data){  
      data.reverse();
    });
  }

  vm.getTweetById = function(id) {
    return expressTweetResource.get({id: id});
  }
  
  vm.postTweet = function(composetweet) {
    return tweetResource.save(
      {
        photo: "https://pbs.twimg.com/profile_images/821536751642673153/JlEInrNR_bigger.jpg",
        name: "Michael Suchorolski",
        handle: "mikesuchor",
        tweet: composetweet
      });
  }

  vm.deleteTweet = function(id) {
    return tweetResource.delete({id: id});
  }

  vm.postTweetInteraction = function(tweet, composetweet) {
    return tweetResource.update(tweet);
  }

  vm.deleteTweetInteraction = function(parent, date) {
    return tweetResource.update(parent);
  }

}
angular
.module('app')
.service('TweetService', TweetService);

function TweetService($resource, $q) {
  var vm = this;
  var expressTweetResource = $resource('http://localhost:5000/tweets/:id/:interactionId', {id: '@id', interactionId: '@interactionId'});

  vm.getTweets = function() {
    return expressTweetResource.query(function(data){   
      data.reverse();
    });
  }

  vm.getTweetById = function(id) {
    return expressTweetResource.get({id: id});
  }
  
  vm.postTweet = function(composetweet) {
    var deferred = $q.defer();
    expressTweetResource.save(
      {
        photo: "https://pbs.twimg.com/profile_images/821536751642673153/JlEInrNR_bigger.jpg",
        name: "Michael Suchorolski",
        handle: "mikesuchor",
        tweet: composetweet
      }).$promise.then(function(success){
        deferred.resolve(success);
      })
    return deferred.promise;
  }

  vm.deleteTweet = function(id) {
    return expressTweetResource.delete({id: id});
  }

  vm.postTweetInteraction = function(tweet, composetweet) {
    return expressTweetResource.save({id: tweet.id}, composetweet);
  }

  vm.deleteTweetInteraction = function(parent, id) {
    return expressTweetResource.delete({id: parent.id}, {interactionId: id});
  }
}
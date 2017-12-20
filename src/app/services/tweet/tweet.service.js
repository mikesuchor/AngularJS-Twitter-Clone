angular
.module('app')
.service('TweetService', TweetService);

function TweetService($resource, $q) {
  var vm = this;
  var expressTweetResource = $resource('http://localhost:5000/tweets/:id/:interactionId', {id: '@id', interactionId: '@interactionId'});

  vm.getTweets = function() {
    var deferred = $q.defer();
    expressTweetResource.query(function(data){   
      data.reverse();
    }).$promise.then(function(success) {
      deferred.resolve(success);
    });
    return deferred.promise;;
  }

  vm.getTweetById = function(id) {
    var deferred = $q.defer();
    expressTweetResource.get({id: id}).$promise.then(function(success) {
      deferred.resolve(success);
    });
    return deferred.promise;
  }
  
  vm.postTweet = function(composetweet) {
    var deferred = $q.defer();
    expressTweetResource.save(
      {
        photo: "https://pbs.twimg.com/profile_images/821536751642673153/JlEInrNR_bigger.jpg",
        name: "Michael Suchorolski",
        handle: "mikesuchor",
        tweet: composetweet
      }).$promise.then(function(success) {
        deferred.resolve(success);
    });
    return deferred.promise;
  }

  vm.deleteTweet = function(id) {
    var deferred = $q.defer();
    expressTweetResource.delete({id: id}).$promise.then(function(success) {
      deferred.resolve(success);
    });
    return deferred.promise;
  }

  vm.postTweetInteraction = function(tweet, composetweet) {
    var deferred = $q.defer();
    expressTweetResource.save({id: tweet.id}, composetweet).$promise.then(function(success) {
      deferred.resolve(success);
    });
    return deferred.promise;
  }

  vm.deleteTweetInteraction = function(parent, id) {
    var deferred = $q.defer();
    expressTweetResource.delete({id: parent.id}, {interactionId: id}).$promise.then(function(success) {
      deferred.resolve(success);
    });
    return deferred.promise;;
  }
}
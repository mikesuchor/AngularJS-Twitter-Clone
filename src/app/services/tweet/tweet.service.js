(function() {
  'use strict';

  angular
  .module('app')
  .service('TweetService', TweetService);

  function TweetService($resource, $q) {
    var vm = this;
    var expressTweetResource = $resource('http://localhost:5000/tweets/:id/:interactionId', {id: '@id', interactionId: '@interactionId'});

    vm.getTweets = getTweets;
    vm.getTweetById = getTweetById;
    vm.postTweet = postTweet;
    vm.deleteTweet = deleteTweet;
    vm.postTweetInteraction = postTweetInteraction;
    vm.deleteTweetInteraction = deleteTweetInteraction;

    function getTweets() {
      var deferred = $q.defer();
      expressTweetResource.query().$promise.then(function(success) {
        deferred.resolve(success.reverse());
      });
      return deferred.promise;
    }

    function getTweetById(id) {
      var deferred = $q.defer();
      expressTweetResource.get({id: id}).$promise.then(function(success) {
        deferred.resolve(success);
      });
      return deferred.promise;
    }
    
    function postTweet(composetweet) {
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

    function deleteTweet(id) {
      var deferred = $q.defer();
      expressTweetResource.delete({id: id}).$promise.then(function(success) {
        deferred.resolve(success);
      });
      return deferred.promise;
    }

    function postTweetInteraction(tweet, composetweet) {
      var deferred = $q.defer();
      expressTweetResource.save({id: tweet.id}, composetweet).$promise.then(function(success) {
        deferred.resolve(success);
      });
      return deferred.promise;
    }

    function deleteTweetInteraction(parent, id) {
      var deferred = $q.defer();
      expressTweetResource.delete({id: parent.id}, {interactionId: id}).$promise.then(function(success) {
        deferred.resolve(success);
      });
      return deferred.promise;;
    }
  }
})();
(function() {
  'use strict';

  angular
  .module('app')
  .service('TweetService', TweetService);

  function TweetService($resource, $q) {
    let vm = this;
    const EXPRESS_TWEET_RESOURCE = $resource('http://localhost:5000/tweets/:id/:interactionId', {id: '@id', interactionId: '@interactionId'});

    vm.getTweets = getTweets;
    vm.getTweetById = getTweetById;
    vm.postTweet = postTweet;
    vm.deleteTweet = deleteTweet;
    vm.postTweetInteraction = postTweetInteraction;
    vm.deleteTweetInteraction = deleteTweetInteraction;

    function getTweets() {
      let deferred = $q.defer();
      EXPRESS_TWEET_RESOURCE.query().$promise.then(function(success) {
        deferred.resolve(success.reverse());
      });
      return deferred.promise;
    }

    function getTweetById(id) {
      let deferred = $q.defer();
      EXPRESS_TWEET_RESOURCE.get({id: id}).$promise.then(function(success) {
        deferred.resolve(success);
      });
      return deferred.promise;
    }
    
    function postTweet(composetweet) {
      let deferred = $q.defer();
      EXPRESS_TWEET_RESOURCE.save(
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
      let deferred = $q.defer();
      EXPRESS_TWEET_RESOURCE.delete({id: id}).$promise.then(function(success) {
        deferred.resolve(success);
      });
      return deferred.promise;
    }

    function postTweetInteraction(tweet, composetweet) {
      let deferred = $q.defer();
      EXPRESS_TWEET_RESOURCE.save({id: tweet.id}, composetweet).$promise.then(function(success) {
        deferred.resolve(success);
      });
      return deferred.promise;
    }

    function deleteTweetInteraction(parent, id) {
      let deferred = $q.defer();
      EXPRESS_TWEET_RESOURCE.delete({id: parent.id}, {interactionId: id}).$promise.then(function(success) {
        deferred.resolve(success);
      });
      return deferred.promise;;
    }
  }
})();
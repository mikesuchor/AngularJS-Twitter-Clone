(function() {
  'use strict';

  angular
  .module('app')
  .component('composeTweet', {
    templateUrl: 'app/common/composeTweet/composeTweet.html',
    bindings: {
      tweet: '<',
      type: '@',
      onUpdateTweet: '&'
    },
    controllerAs: 'ComposeTweetController',
    controller: function(TweetService) {
      var vm = this;

      vm.postTweet = postTweet;
      vm.postTweetInteraction = postTweetInteraction;

      function postTweet(composetweet) {
        TweetService.postTweet(composetweet).then(function(success) {
          vm.onUpdateTweet();
        });
      }
      function postTweetInteraction(tweet, text) {
        var composetweet = {
          photo: "https://pbs.twimg.com/profile_images/821536751642673153/JlEInrNR_bigger.jpg",
          name: "Michael Suchorolski",
          handle: "mikesuchor",
          time: "testing",
          replyingto: "testing",
          tweet: text,
          date: new Date().toString()
        };
        TweetService.postTweetInteraction(tweet, composetweet).then(function(success) {
          if (!tweet.interactions) {
            tweet.interactions = [];
          }
          tweet.interactions.push(composetweet);
          vm.onUpdateTweet();
        });
      }
    }
  });
})();
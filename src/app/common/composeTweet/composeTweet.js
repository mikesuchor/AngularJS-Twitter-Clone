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
    controller: function(TweetService) {
      let vm = this;

      vm.postTweet = postTweet;
      vm.postTweetInteraction = postTweetInteraction;

      function postTweet(composeTweet) {
        TweetService.postTweet(composeTweet).then(function(success) {
          vm.onUpdateTweet();
        });
      }
      function postTweetInteraction(tweet, text) {
        let composeTweet = {
          photo: "https://pbs.twimg.com/profile_images/821536751642673153/JlEInrNR_bigger.jpg",
          name: "Michael Suchorolski",
          handle: "mikesuchor",
          time: "testing",
          replyingto: "testing",
          tweet: text,
          date: new Date().toString()
        };
        TweetService.postTweetInteraction(tweet, composeTweet).then(function(success) {
          if (!tweet.interactions) {
            tweet.interactions = [];
          }
          tweet.interactions.push(composeTweet);
          vm.onUpdateTweet();
        });
      }
    }
  });
})();
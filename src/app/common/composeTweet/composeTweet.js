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
    controller: ComposeTweetController
  });

  function ComposeTweetController(TweetService) {
    var vm = this;

    vm.postTweet = postTweet;
    vm.postTweetInteraction = postTweetInteraction;

    function postTweet(composeTweet) {
      TweetService.postTweet(composeTweet).then(function() {
        vm.onUpdateTweet();
      });
    }
    function postTweetInteraction(tweet, text) {
      var composeTweet = {
        photo: '/images/profile_images/JlEInrNR_bigger.jpg',
        name: 'Michael Suchorolski',
        username: 'mikesuchor',
        time: 'testing',
        replyingto: 'testing',
        tweet: text,
        date: new Date().toString()
      };
      TweetService.postTweetInteraction(tweet, composeTweet).then(function() {
        if (!tweet.interactions) {
          tweet.interactions = [];
        }
        tweet.interactions.push(composeTweet);
        vm.onUpdateTweet();
      });
    }
  }
})();

angular
  .module('app')
  .component('composeTweet', {
    templateUrl: 'app/common/composeTweet/composeTweet.html',
    bindings: {
      onPostTweet: '&'
    },
    controller: function(TweetService) {
      var vm = this;
      vm.postTweet = function(composetweet) {
        if(composetweet !== undefined) {
          alert(composetweet);
          TweetService.postTweet(composetweet).$promise.then(function(success) {
          vm.onPostTweet();
        });
      }
      }
    }
  });
angular
  .module('app')
  .component('tweet', {
    templateUrl: 'app/common/tweet/tweet.html',
    bindings: {tweet: '<'},
    controller: function() {
    }
  });
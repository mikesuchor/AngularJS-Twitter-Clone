angular
.module('app')
.component('home', {
  templateUrl: 'app/home/home.html',
  controller: function(TweetService) {
    var vm = this;
    TweetService.getTweets().then(function(success) {
      vm.tweets = success.data.tweets;
    });
}
});
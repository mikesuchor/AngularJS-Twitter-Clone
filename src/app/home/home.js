angular
.module('app')
.component('home', {
  templateUrl: 'app/home/home.html',
  controller: function(TweetService) {
    var vm = this;
    vm.tweets = TweetService.getTweets();
}
});
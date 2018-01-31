angular
  .module('app')
  .component('mentions', {
    templateUrl: 'app/common/mentions/mentions.html',
    bindings: {
      tweets: '<'
    },
    controller: MentionsController
  });

function MentionsController(TweetService) {
  var vm = this;

  vm.$onInit = function() {
    vm.promise = TweetService.getMentions().then(function(success) {
      vm.tweets = success;
    });
  };
}

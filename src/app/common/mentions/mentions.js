angular
  .module('app')
  .component('mentions', {
    templateUrl: 'app/common/mentions/mentions.html',
    bindings: {
      tweets: '<'
    },
    controller: MentionsController
  });

  function MentionsController() {
  }

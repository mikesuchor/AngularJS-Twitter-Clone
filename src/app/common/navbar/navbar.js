angular
.module('app')
.component('navbar', {
  templateUrl: 'app/common/navbar/navbar.html',
  bindings: {
    onPostTweet: '&'
  },
  controller: function($uibModal) {
    var vm = this;
    vm.open = function (){
      var modalInstance = $uibModal.open({
        component: "popupCompose",
        windowClass: 'navbar-tweet-window',
        resolve: {
          tweet: function () {
            return vm.tweet;
          }
        }
      });
      modalInstance.result.then(function() {
        vm.onPostTweet();
      });
    };
  }
});
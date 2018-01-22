angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
    .state('home.notifications', {
      url: 'notifications',
      component: 'notifications',
      resolve: {
        tweet: function(TweetService) {
          return TweetService.getTweets();
        }
      }
    })
    .state('home.mentions', {
      url: 'mentions',
      component: 'notifications',
      resolve: {
        tweet: function(TweetService) {
          return TweetService.getTweets();
        }
      }
    })
    .state('home.messages', {
      url: 'messages',
      component: 'messages'
    });
}

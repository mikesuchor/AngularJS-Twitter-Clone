angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.when('/', '/home');

  $stateProvider
    .state('main', {
      url: '/',
      component: 'main'
    })
    .state('login', {
      url: '/login',
      component: 'login'
    })
    .state('main.home', {
      url: 'home',
      component: 'home'
    })
    .state('main.notifications', {
      url: 'notifications',
      component: 'notifications'
    })
    .state('main.mentions', {
      url: 'mentions',
      component: 'mentions'
    })
    .state('main.messages', {
      url: 'messages',
      component: 'messages'
    });
}

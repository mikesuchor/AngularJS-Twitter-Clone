angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.when('/', '/login');

  $stateProvider
    .state('main', {
      url: '/',
      component: 'main'
    })
    .state('login', {
      url: '/login',
      component: 'login',
      resolve: {
        loadComponent: function($ocLazyLoad) {
          return $ocLazyLoad.load('app/login/login.module.js');
        }
      }
    })
    .state('main.home', {
      url: 'home',
      component: 'home',
      resolve: {
        loadComponent: function($ocLazyLoad) {
          return $ocLazyLoad.load('app/home/home.module.js');
        }
      }
    })
    .state('main.notifications', {
      url: 'notifications',
      component: 'notifications',
      resolve: {
        loadComponent: function($ocLazyLoad) {
          return $ocLazyLoad.load('app/common/notifications/notifications.module.js');
        }
      }
    })
    .state('main.mentions', {
      url: 'mentions',
      component: 'mentions',
      resolve: {
        loadComponent: function($ocLazyLoad) {
          return $ocLazyLoad.load('app/common/mentions/mentions.module.js');
        }
      }
    })
    .state('main.messages', {
      url: 'messages',
      component: 'messages',
      resolve: {
        loadComponent: function($ocLazyLoad) {
          return $ocLazyLoad.load('app/common/messages/messages.module.js');
        }
      }
    });
}

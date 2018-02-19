angular
  .module('app', ['app.home', 'app.login', 'app.messages', 'app.notifications',
  'cgBusy', 'oc.lazyLoad', 'ngResource', 'pascalprecht.translate', 'ui.bootstrap', 'ui.router'])
  .config(['$translateProvider', function($translateProvider) {
    $translateProvider
      .preferredLanguage('messages_en')
      .useStaticFilesLoader({
        prefix: '/app/languages/',
        suffix: '.json'
      });
  }])
  .value('cgBusyDefaults', {
    message: 'Please Wait...',
    backdrop: true,
    minDuration: 200,
    wrapperClass: 'cg-busy-fullscreen'
  });

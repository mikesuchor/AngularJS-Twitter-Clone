angular
  .module('app', ['cgBusy', 'ngResource', 'ui.bootstrap', 'ui.router'])
  .value('cgBusyDefaults', {
    message: 'Please Wait...',
    backdrop: true,
    minDuration: 3000,
    wrapperClass: 'cg-busy-fullscreen'
  });

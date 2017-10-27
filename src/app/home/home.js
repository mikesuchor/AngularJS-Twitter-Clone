angular
.module('app')
.component('home', {
  templateUrl: 'app/home/home.html',
  controller: function () {
    this.hello = 'Hello world!';
  }
});

(function() {
    'use strict';

angular
  .module('app')
  .component('trends', {
    templateUrl: 'app/home/trends/trends.html',
    controller: TrendsController
  });
  
  function TrendsController() {
    let vm = this;
    vm.trends = [
      {
        name: "#docventures",
        numtweets: "1,715 Tweets",
      },{
        name: "Amazon Key",
        numtweets: "31.2K Tweets",
      },{
        name: "Fats Domino",
        numtweets: "116K Tweets",
      },{
        name: "#WednesdayWisdom",
        numtweets: "8,999 Tweets",
      },{
        name: "#BestHalloweenIn5Words",
        numtweets: "16.3K Tweets",
      },{
        name: "#MillenialAMovie",
        numtweets: "3,183 Tweets",
      },{
        name: "#PutShoesOnAMovie",
        numtweets: "3,733 Tweets",
      },{
        name: "#MyGoToComfortFood",
        numtweets: "2,005 Tweets",
      },{
        name: "#RBLFCB",
        numtweets: "5,207 Tweets",
      },{
        name: "#destelling",
        numtweets: "10.5K Tweets",
      }
    ]
  }
})();
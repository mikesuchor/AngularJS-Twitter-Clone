describe('TweetService service', function () {
  var expressTweetResource = 'http://localhost:5000/tweets/:id/:interactionId';

  beforeEach(module('app'));

  // describe('vm.getTweets', inject(function($http) {
  //   it('should return an array containing all tweets and reverse the array', function() {

  //     var $scope = {};

  //     $http.get(expressTweetResource)
  //     .success(function(data) {
  //       $scope.response = data;
  //     });

  //     $httpBackend
  //     .when('GET', expressTweetResource)
  //     .respond(200, ['a', 'b', 'c']);

  //     $httpBackend.flush();

  //     expect($scope.response).toEqual(['a', 'b', 'c']);
  //   });
  // }));

  describe('vm.getTweetById', function () {
    it('should return a tweet by its id', function() {
    });
  });

  describe('vm.postTweet', function () {
  it('should return an array containing all tweets with the new tweet appended', function() {
    });
  });

  describe('vm.deleteTweet', function () {
  it('should delete a tweet using its id and return the array containing all tweets', function() {
    });
  });

  describe('vm.postTweetInteraction', function () {
  it('should post a tweet interaction to a tweet', function() {
    });
  });

  describe('vm.deleteTweetInteraction', function () {
  it('should delete a tweet interaction', function() {
    });
  });
});

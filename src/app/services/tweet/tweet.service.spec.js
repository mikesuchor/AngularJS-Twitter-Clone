describe('TweetService service', function () {
  var $http, $httpBackend;
  var expressTweetResource = 'http://localhost:5000/tweets/';

  beforeEach(module('app'));
  beforeEach(inject(function(_$http_, _$httpBackend_, _TweetService_) {
    $http = _$http_;
    $httpBackend = _$httpBackend_;
    TweetService = _TweetService_;
  }));

  describe('vm.getTweets', function () {
    it('should return an array containing all tweets and reverse the array', function() {
      var $scope = {};

      $httpBackend.expectGET(expressTweetResource).respond([{id: 1}, {id: 2}, {id: 3}]);

      $http.get(expressTweetResource).then(function(result) {
        $scope.response = result.data;
      });

      $httpBackend.flush();

      expect($scope.response.reverse()).toEqual([{id: 3}, {id: 2}, {id: 1}]);
    });
  });

  /* 
  / Other way to do test above 
  */
  
  // describe('vm.getTweets', function () {
  //   it('should return an array containing all tweets and reverse the array', function() {
  //     var $scope = {};

  //     $http.get(expressTweetResource)
  //     .then(function(data, status, headers, config) {
  //       $scope.tweets = data;
  //     });

  //     $httpBackend
  //     .when('GET', expressTweetResource)
  //     .respond([{id: 1}, {id: 2}, {id: 3}]);

  //     $httpBackend.flush();

  //     expect($scope.tweets.data.reverse()).toEqual([{id: 3}, {id: 2}, {id: 1}]);
  //   });
  // });

  describe('vm.getTweetById', function () {
    it('should return a tweet by its id', function() {
      var $scope = {};

      $http.get(expressTweetResource + '1')
      .then(function(data, status, headers, config) {
        $scope.tweet = data;
      });

      $httpBackend
      .when('GET', expressTweetResource + '1')
      .respond({id: 1});

      $httpBackend.flush();

      expect($scope.tweet.data).toEqual({id: 1});
    });
  });

  describe('vm.postTweet', function () {
    it('should return an array containing all tweets with the new tweet appended', function() {
      var $scope = {};

      $http.post(expressTweetResource, {id: 4})
      .then(function(data, status, headers, config) {
        $scope.tweet = data;
      });

      $httpBackend
      .when('POST', expressTweetResource, {id: 4})
      .respond([{id: 1}, {id: 2}, {id: 3}, {id: 4}]);

      $httpBackend.flush();
      expect($scope.tweet.data).toEqual([{id: 1}, {id: 2}, {id: 3}, {id: 4}]);
    });
  });

  describe('vm.deleteTweet', function () {
    it('should delete a tweet using its id and return the array containing all tweets', function() {
      var $scope = {};

      $httpBackend.expectDELETE(expressTweetResource + '1').respond([{id: 2}, {id: 3}]);

      $http.delete(expressTweetResource + '1').then(function(result) {
        $scope.response = result.data;
      });

      $httpBackend.flush();

      expect($scope.response).toEqual([{id: 2}, {id: 3}]);
    });
  });

  describe('vm.postTweetInteraction', function () {
    it('should post a tweet interaction to a tweet', function() {
      var $scope = {};

      $httpBackend.expectPOST(expressTweetResource + '1').respond([{id: 1, interactions: [{id: 1}]}]);

      $http.post(expressTweetResource + '1').then(function(result) {
        $scope.response = result.data;
      });

      $httpBackend.flush();

      expect($scope.response).toEqual([{id: 1, interactions: [{id: 1}]}]);
    });
  });

  describe('vm.deleteTweetInteraction', function () {
    it('should delete a tweet interaction', function() {
      var $scope = {};

      $httpBackend.expectDELETE(expressTweetResource + '1' + '/2').respond([{id: 1, interactions: [{id: 1}]}]);

      $http.delete(expressTweetResource + '1' + '/2').then(function(result) {
        $scope.response = result.data;
      });

      $httpBackend.flush();

      expect($scope.response).toEqual([{id: 1, interactions: [{id: 1}]}]);
    });
  });
});

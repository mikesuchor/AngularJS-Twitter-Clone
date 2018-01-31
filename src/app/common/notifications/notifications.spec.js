describe('notifications component', function() {
  var $q;
  var $state;
  var $httpBackend;
  var $location;

  var tweetServiceMock = jasmine.createSpyObj('TweetService', ['getTweets']);

  function mockServices($provide) {
    $provide.factory('TweetService', function() {
      return tweetServiceMock;
    });
  }

  function setUp() {
    $httpBackend.whenGET(/assets\/(.+)/).respond(200, {});
  }

  beforeEach(module('app', mockServices));
  beforeEach(inject(function(_$q_, _$state_, _$httpBackend_, _$location_) {
    $q = _$q_;
    $state = _$state_;
    $httpBackend = _$httpBackend_;
    $location = _$location_;
    setUp();
  }));

  it('should get tweets when navigating to /notifications', function() {
    tweetServiceMock.getTweets.and.returnValue($q.resolve([]));
    $location.url('/notifications');

    expect(tweetServiceMock.getTweets).toHaveBeenCalled();
    expect($state.current.name).toBe('/notifications');
  });
});

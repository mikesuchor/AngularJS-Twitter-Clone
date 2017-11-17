describe('TweetService service', function () {
  beforeEach(module('app'));
  xit('should', angular.mock.inject(function (TweetService) {
    expect(TweetService.getData()).toEqual(3);
  }));
});

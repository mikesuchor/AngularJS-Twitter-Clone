describe('Tweet.service service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Tweet.service) {
    expect(Tweet.service.getData()).toEqual(3);
  }));
});

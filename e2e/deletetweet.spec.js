var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {
  var twitterMainPage = new TwitterMainPage();

  beforeEach(function() {
    var randomString = twitterMainPage.generateRandomString();
    twitterMainPage.loadMainPage();
    twitterMainPage.composeTweet(randomString);
  });

  it('should delete a tweet', function() {
    twitterMainPage.tweetCount().then(function(result) {
      // Why is this line deleting 2 tweets?
      twitterMainPage.deleteTweet();
      expect(twitterMainPage.tweetCount()).toEqual(result - 1);
    });
  });
});

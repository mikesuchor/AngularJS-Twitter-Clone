var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {
  var twitterMainPage = new TwitterMainPage();

  beforeEach(function() {
    var randomString = twitterMainPage.generateRandomString();
    twitterMainPage.loadMainPage();
    twitterMainPage.composeTweet(randomString);
    twitterMainPage.openTweetDetail();
    twitterMainPage.composeTweetInteraction(randomString);
  });

  it('should delete a tweet interaction', function() {
    twitterMainPage.interactionCount().then(function(result) {
      twitterMainPage.deleteTweetInteraction();
      expect(twitterMainPage.interactionCount()).toEqual(result - 1);
    });
  });

  afterEach(function() {
    twitterMainPage.deleteTweet();
  });
});

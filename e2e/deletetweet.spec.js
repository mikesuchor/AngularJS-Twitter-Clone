var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {

  const TWITTER_MAIN_PAGE = new TwitterMainPage();

  beforeEach(function() {
    let randomString = TWITTER_MAIN_PAGE.generateRandomString();
    TWITTER_MAIN_PAGE.loadHomePage();
    TWITTER_MAIN_PAGE.composeTweet(randomString);
  });

  it('should delete a tweet', function() {
    TWITTER_MAIN_PAGE.tweetCount().then(function(result) {
      // Why is this line deleting 2 tweets?
      TWITTER_MAIN_PAGE.deleteTweet();
      expect(TWITTER_MAIN_PAGE.tweetCount()).toEqual(result - 1);
    });
  });
});
var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {

  const TWITTER_MAIN_PAGE = new TwitterMainPage();

  beforeEach(function() {
    let randomString = TWITTER_MAIN_PAGE.generateRandomString();
    TWITTER_MAIN_PAGE.loadHomePage();
    TWITTER_MAIN_PAGE.composeTweet(randomString);
    TWITTER_MAIN_PAGE.openTweetDetail();
    TWITTER_MAIN_PAGE.composeTweetInteraction(randomString);
  });

  it('should delete a tweet interaction', function() {
    TWITTER_MAIN_PAGE.interactionCount().then(function(result) {
      TWITTER_MAIN_PAGE.deleteTweetInteraction();
      expect(TWITTER_MAIN_PAGE.interactionCount()).toEqual(result - 1);
    });
  });

  afterEach(function() {
    TWITTER_MAIN_PAGE.deleteTweet();
  })
});
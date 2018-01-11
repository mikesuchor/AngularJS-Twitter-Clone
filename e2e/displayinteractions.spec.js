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

  it('should open a tweet and display the interactions', function() {
    expect(TWITTER_MAIN_PAGE.interactionCount()).toEqual(1);
  });

  afterEach(function() {
    TWITTER_MAIN_PAGE.deleteTweet();
  });
});
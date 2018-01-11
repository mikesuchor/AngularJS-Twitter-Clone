var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {
    
  const TWITTER_MAIN_PAGE = new TwitterMainPage();

  it('should display tweets on the main page', function() {
    TWITTER_MAIN_PAGE.loadHomePage();
    TWITTER_MAIN_PAGE.composeTweet('test');
    expect(TWITTER_MAIN_PAGE.tweetCount()).toBeGreaterThan(0);
  });

  afterEach(function() {
    TWITTER_MAIN_PAGE.deleteTweet();
  });
});
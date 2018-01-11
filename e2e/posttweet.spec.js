var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {

  const TWITTER_MAIN_PAGE = new TwitterMainPage();

  it('should post a tweet on the main page', function() {
    let randomString = TWITTER_MAIN_PAGE.generateRandomString();
    TWITTER_MAIN_PAGE.loadHomePage();
    TWITTER_MAIN_PAGE.composeTweet(randomString);
    expect(TWITTER_MAIN_PAGE.tweetText()).toEqual(randomString);
  });

  afterEach(function() {
    TWITTER_MAIN_PAGE.deleteTweet();
  });
});
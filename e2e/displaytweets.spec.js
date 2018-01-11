var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {
    
  const twitterMainPage = new TwitterMainPage();

  it('should display tweets on the main page', function() {
    twitterMainPage.loadHomePage();
    twitterMainPage.composeTweet('test');
    expect(twitterMainPage.tweetCount()).toBeGreaterThan(0);
  });

  afterEach(function() {
    twitterMainPage.deleteTweet();
  });
});
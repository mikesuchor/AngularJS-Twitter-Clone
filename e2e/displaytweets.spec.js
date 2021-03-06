var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {
  var twitterMainPage = new TwitterMainPage();

  it('should display tweets on the main page', function() {
    twitterMainPage.loadMainPage();
    twitterMainPage.composeTweet('test');
    expect(twitterMainPage.tweetCount()).toBeGreaterThan(0);
  });

  afterEach(function() {
    twitterMainPage.deleteTweet();
  });
});

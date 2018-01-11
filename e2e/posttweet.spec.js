var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {

  const twitterMainPage = new TwitterMainPage();

  it('should post a tweet on the main page', function() {
    let randomString = twitterMainPage.generateRandomString();
    twitterMainPage.loadHomePage();
    twitterMainPage.composeTweet(randomString);
    expect(twitterMainPage.tweetText()).toEqual(randomString);
  });

  afterEach(function() {
    twitterMainPage.deleteTweet();
  });
});
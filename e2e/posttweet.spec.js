var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {

  var twitterMainPage = new TwitterMainPage();

  it('should post a tweet on the main page', function() {
    var randomString = twitterMainPage.generateRandomString();
    twitterMainPage.loadHomePage();
    twitterMainPage.composeTweet(randomString);
    expect(twitterMainPage.tweetText()).toEqual(randomString);
  });

  afterEach(function() {
    twitterMainPage.deleteTweet();
  });
});
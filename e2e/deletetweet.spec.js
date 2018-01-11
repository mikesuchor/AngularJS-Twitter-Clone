var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {
    
  const twitterMainPage = new TwitterMainPage();

  beforeEach(function() {
    let randomString = twitterMainPage.generateRandomString();
    twitterMainPage.loadHomePage();
    twitterMainPage.composeTweet(randomString);
  });
  
  it('should delete a tweet', function() {
    twitterMainPage.tweetCount().then(function(result) {
      // Why is this line deleting 2 tweets?
      twitterMainPage.deleteTweet();
      expect(twitterMainPage.tweetCount()).toEqual(result - 1);
    });
  });
});
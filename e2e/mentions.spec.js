var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {
  var twitterMainPage = new TwitterMainPage();

  it('should navigate to /mentions from /notifications', function() {
    twitterMainPage.loadMainPage();
    twitterMainPage.clickNavbarNotificationsLink();
    twitterMainPage.clickNotificationsMentionsLink();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/mentions');
  });

  it('should display tweets in /mentions', function() {
    twitterMainPage.loadMainPage();
    twitterMainPage.composeTweet('test');
    twitterMainPage.clickNavbarNotificationsLink();
    twitterMainPage.clickNotificationsMentionsLink();
    expect(twitterMainPage.tweetCount()).toBeGreaterThan(0);
  });

  afterAll(function() {
    twitterMainPage.loadMainPage();
    twitterMainPage.deleteTweet();
  });
});

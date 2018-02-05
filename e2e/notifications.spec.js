var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {
  var twitterMainPage = new TwitterMainPage();

  it('should navigate to notifications endpoint from navbar', function() {
    twitterMainPage.loadMainPage();
    twitterMainPage.clickNavbarNotificationsLink();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/notifications');
  });

  it('should navigate to notifications endpoint from mentions endpoint', function() {
    twitterMainPage.loadMainPage();
    twitterMainPage.clickNavbarNotificationsLink();
    twitterMainPage.clickNotificationsMentionsLink();
    twitterMainPage.clickNotificationsAllLink();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/notifications');
  });
});

var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {
  var twitterMainPage = new TwitterMainPage();

  it('should navigate to mentions endpoint from notifications endpoint', function() {
    twitterMainPage.loadHomePage();
    twitterMainPage.clickNavbarNotificationsLink();
    twitterMainPage.clickNotificationsMentionsLink();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/mentions');
  });
});

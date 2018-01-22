var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {
  var twitterMainPage = new TwitterMainPage();

  it('should navigate to messages endpoint from navbar', function() {
    twitterMainPage.loadHomePage();
    twitterMainPage.clickNavbarMessagesLink();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/messages');
  });
});

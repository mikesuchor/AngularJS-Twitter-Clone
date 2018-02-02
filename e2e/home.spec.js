var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {
  var twitterMainPage = new TwitterMainPage();

  it('should navigate to home endpoint from navbar', function() {
    twitterMainPage.loadMainPage();
    twitterMainPage.clickNavbarHomeLink();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/home');
  });
});

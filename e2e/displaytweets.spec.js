var TwitterMainPage = require('./twittermainpage.pageObject.js');

describe('Twitter App', function() {
    
    var twitterMainPage = new TwitterMainPage();

    it('should display tweets on the main page', function() {
        twitterMainPage.get();
        var numTweets = element.all(by.repeater('tweet in $ctrl.tweets')).count();
        expect(numTweets).not.toBeLessThan(1);
    });
});
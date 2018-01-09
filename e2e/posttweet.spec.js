var TwitterMainPage = require('./twittermainpage.pageObject.js');

describe('Twitter App', function() {

    var twitterMainPage = new TwitterMainPage();

    it('should post a tweet on the main page', function() {
        twitterMainPage.get();
        var randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        twitterMainPage.composeTweet(randomString);
        expect(element.all(by.binding('$ctrl.tweet.tweet')).first().getText()).toEqual(randomString);
    });
});
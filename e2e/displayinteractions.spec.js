var TwitterMainPage = require('./twittermainpage.po.js');

describe('Twitter App', function() {

    var twitterMainPage = new TwitterMainPage();

    beforeEach(function() {
        var randomString = twitterMainPage.generateRandomString();
        twitterMainPage.loadHomePage();
        twitterMainPage.composeTweet(randomString);
        twitterMainPage.openTweetDetail();
        twitterMainPage.composeTweetInteraction(randomString);
    });

    it('should open a tweet and display the interactions', function() {
        expect(twitterMainPage.interactionCount()).toEqual(1);
    });

    afterEach(function() {
        twitterMainPage.deleteTweet();
    })
});
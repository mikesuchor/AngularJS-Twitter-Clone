var TwitterMainPage = require('./twittermainpage.pageObject.js');

describe('Twitter App', function() {

    var twitterMainPage = new TwitterMainPage();

    beforeEach(function() {
        twitterMainPage.get();
        var randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        twitterMainPage.composeTweet(randomString);
        twitterMainPage.openTweetDetail();
        twitterMainPage.composeTweetInteraction(randomString);
    });

    it('should open a tweet and display the interactions', function() {
        var numInteractions = element.all(by.repeater('interaction in $ctrl.tweet.interactions')).count();
        expect(numInteractions).toEqual(1);
    });
});
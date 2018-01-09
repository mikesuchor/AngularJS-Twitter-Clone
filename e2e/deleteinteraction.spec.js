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

    it('should delete a tweet interaction', function() {
        var interactionCount = element.all(by.repeater("interaction in $ctrl.tweet.interactions")).count();
        interactionCount.then(function(data) {
            twitterMainPage.deleteTweetInteraction();
            var interactionCountAfterDelete = element.all(by.repeater("interaction in $ctrl.tweet.interactions")).count();
            expect(interactionCountAfterDelete).toEqual(data-1);
        });
    });
});
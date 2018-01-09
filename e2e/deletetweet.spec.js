var TwitterMainPage = require('./twittermainpage.pageObject.js');

describe('Twitter App', function() {
    
    var twitterMainPage = new TwitterMainPage();

    beforeEach(function() {
        twitterMainPage.get();
        var randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        twitterMainPage.composeTweet(randomString);
    });
    
    it('should delete a tweet', function() {
        var elementCount = element.all(by.repeater("tweet in $ctrl.tweets")).count();
        elementCount.then(function(data) {

            // Why is this line deleting 2 tweets?
            twitterMainPage.deleteTweet();

            var elementCountAfterDelete = element.all(by.repeater("tweet in $ctrl.tweets")).count();
            expect(elementCountAfterDelete).toEqual(data-1);
        });
    });
});
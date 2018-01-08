describe('deleting a tweet', function() {
    
    beforeEach(function() {
        browser.get('http://localhost:3000/');
        var randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        element(by.model('composetweet')).sendKeys(randomString);
        element(by.css('.compose-tweet-btn')).click();
    });
    
    it('should delete a tweet', function() {
        var elementCount = element.all(by.repeater("tweet in $ctrl.tweets")).count();
        elementCount.then(function(data) {
            element.all(by.css('.dropdown-toggle')).first().click();

            // Why is this line deleting 2 tweets?
            element.all(by.css('[ng-click="$ctrl.deleteTweet($ctrl.tweet.id)"]')).first().click();
            
            var elementCountAfterDelete = element.all(by.repeater("tweet in $ctrl.tweets")).count();
            expect(elementCountAfterDelete).toEqual(data-1);
        });
    });
});
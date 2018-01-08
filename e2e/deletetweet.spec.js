describe('deleting a tweet', function() {
    
    beforeEach(function() {
        /* 
        / Bug - Not refreshing the page after posting a tweet
        */
        browser.get('http://localhost:3000/');
        var randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        element(by.model('composetweet')).sendKeys(randomString);
        element(by.css('.compose-tweet-btn')).click();
        element(by.model('composetweet')).sendKeys(' ');
    });
    
    it('should delete a tweet', function() {
        var elementCount = element.all(by.repeater("tweet in $ctrl.tweets")).count();
        elementCount.then(function(data) {
            console.log(elementCount);
            console.log(data);
            /*
            / Bug - Gives Failed: element not visible error, as the page is not refreshing in beforeEach
            */
            element.all(by.css('.dropdown-toggle')).first().click();

            // Why is this line deleting 2 tweets?
            element.all(by.css('[ng-click="$ctrl.deleteTweet($ctrl.tweet.id)"]')).first().click();
            
            var elementCountAfterDelete = element.all(by.repeater("tweet in $ctrl.tweets")).count();
            expect(elementCountAfterDelete).toEqual(data-1);
        });
    });
});
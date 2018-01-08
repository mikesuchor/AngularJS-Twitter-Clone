describe('deleting a tweet interaction', function() {

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

    it('should delete a tweet interaction', function() {
        browser.get('http://localhost:3000/');
        var interactionCount = element.all(by.repeater("tweet in $ctrl.tweets")).count();
        interactionCount.then(function(data) {
            console.log(interactionCount);
            console.log(data);
            element.all(by.css('.click-container')).first().click();
            element.all(by.css('.interaction-dropdown')).first().click();
            element.all(by.css('[ng-click="$ctrl.deleteTweetInteraction($ctrl.parent, $ctrl.tweet.id)"]')).first().click();
            var interactionCountAfterDelete = element.all(by.repeater("tweet in $ctrl.tweets")).count();
            expect(interactionCountAfterDelete).toEqual(data-1);
        });
    });

    // Delete created tweet
    afterEach(function() {
    });
});
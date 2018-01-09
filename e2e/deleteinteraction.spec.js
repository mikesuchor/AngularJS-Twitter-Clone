describe('Twitter App', function() {
    
    beforeEach(function() {
        browser.get('http://localhost:3000/');
        var randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        element.all(by.model('composetweet')).first().sendKeys(randomString);
        element.all(by.css('.compose-tweet-btn')).first().click();
        element.all(by.css('.tweets-section')).first().click();
        element.all(by.model('composetweet')).first().sendKeys(randomString);
        element.all(by.css('.compose-tweet-btn')).first().click();
    });

    it('should delete a tweet interaction', function() {
        var interactionCount = element.all(by.repeater("interaction in $ctrl.tweet.interactions")).count();
        interactionCount.then(function(data) {
            element.all(by.css('.interaction-dropdown')).first().click();
            element.all(by.css('[ng-click="$ctrl.deleteTweetInteraction($ctrl.parent, $ctrl.tweet.id)"]')).first().click();
            var interactionCountAfterDelete = element.all(by.repeater("interaction in $ctrl.tweet.interactions")).count();
            expect(interactionCountAfterDelete).toEqual(data-1);
        });
    });
});
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

    it('should open a tweet and display the interactions', function() {
        var numInteractions = element.all(by.repeater('interaction in $ctrl.tweet.interactions')).count();
        expect(numInteractions).toEqual(1);
    });
});
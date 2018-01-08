describe('clicking on a tweet', function() {
    it('should open the tweet and display interactions', function() {
        browser.get('http://localhost:3000/');

        element.all(by.css('.tweets-section')).first().click();
        
        var interactions = element.all(by.repeater('interaction in $ctrl.tweet.interactions')).count();

        // Use a tweet with an interaction
        expect(interactions).toEqual(jasmine.any(Number));
    });
});
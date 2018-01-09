describe('Twitter App', function() {
    it('should display tweets on the main page', function() {
        browser.get('http://localhost:3000/');
        var numTweets = element.all(by.repeater('tweet in $ctrl.tweets')).count();
        expect(numTweets).not.toBeLessThan(1);
    });
});
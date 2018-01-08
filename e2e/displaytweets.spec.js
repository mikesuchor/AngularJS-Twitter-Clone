describe('displaytweets', function() {
    it('should display tweets in the main page', function() {
        browser.get('http://localhost:3000/');
        var elements = element.all(by.repeater('tweet in $ctrl.tweets')).count();
        expect(elements).not.toBeLessThan(1);
    });
});
describe('writing a tweet', function() {
    it('should post a tweet', function() {
        /* 
        / Bug - Not refreshing the page after posting a tweet 
        */
        browser.get('http://localhost:3000/');
        var randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        element(by.model('composetweet')).sendKeys(randomString);
        element(by.css('.compose-tweet-btn')).click();
        element(by.model('composetweet')).sendKeys(' ');
        expect(element.all(by.binding('$ctrl.tweet.tweet')).first().getText()).toEqual(randomString);
    });
});
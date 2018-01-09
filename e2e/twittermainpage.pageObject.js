var TwitterMainPage = function() {

    var composeTweetField = element.all(by.model('composetweet')).first();
    var composeTweetButton = element.all(by.css('.compose-tweet-btn')).first();
    var tweetDetail = element.all(by.css('.tweets-section')).first();
    var tweetDropdownMenu = element.all(by.css('.dropdown-toggle')).first();
    var deleteTweet = element.all(by.css('[ng-click="$ctrl.deleteTweet($ctrl.tweet.id)"]')).first();
    var interactionDropdownMenu = element.all(by.css('.interaction-dropdown')).first();
    var deleteTweetInteraction = element.all(by.css('[ng-click="$ctrl.deleteTweetInteraction($ctrl.parent, $ctrl.tweet.id)"]')).first();

    this.get = function() {
        browser.get('http://localhost:3000/');
    };

    this.composeTweet = function(randomString) {
        composeTweetField.sendKeys(randomString);
        composeTweetButton.click();
    };

    this.composeTweetInteraction = function(randomString) {
        composeTweetField.sendKeys(randomString);
        composeTweetButton.click();
    };

    this.openTweetDetail = function() {
        tweetDetail.click();
    };

    this.deleteTweet = function() {
        tweetDropdownMenu.click();
        deleteTweet.click();
    };

    this.deleteTweetInteraction = function() {
        interactionDropdownMenu.click();
        deleteTweetInteraction.click();
    };
};
module.exports = TwitterMainPage;
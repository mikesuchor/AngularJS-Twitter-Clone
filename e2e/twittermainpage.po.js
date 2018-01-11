var TwitterMainPage = function() {

  const COMPOSE_TWEET_FIELD = element.all(by.model('composeTweet')).first();
  const COMPOSE_TWEET_BUTTON = element.all(by.css('.compose-tweet-btn')).first();
  const TWEET_DETAIL = element.all(by.css('.tweets-section')).first();
  const TWEET_DROPDOWN_MENU = element.all(by.css('.dropdown-toggle')).first();
  const DELETE_TWEET = element.all(by.css('[ng-click="TweetController.deleteTweet(TweetController.tweet.id)"]')).first();
  const INTERACTION_DROPDOWN_MENU = element.all(by.css('.interaction-dropdown')).first();
  const DELETE_TWEET_INTERACTION = element.all(by.css('[ng-click="TweetController.deleteTweetInteraction(TweetController.parent, TweetController.tweet.id)"]')).first();
  const TWEET_COLLECTION = element.all(by.repeater('tweet in HomeController.tweets'));
  const INTERACTION_COLLECTION = element.all(by.repeater('interaction in TweetDetailController.tweet.interactions'));
  const TWEET = element.all(by.binding('TweetController.tweet.tweet')).first();

  this.generateRandomString = function() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  this.loadHomePage = function() {
    browser.get('http://localhost:3000/');
  }

  this.tweetCount = function() {
    return TWEET_COLLECTION.count();
  }

  this.interactionCount = function() {
    return INTERACTION_COLLECTION.count();
  }

  this.composeTweet = function(randomString) {
    COMPOSE_TWEET_FIELD.sendKeys(randomString);
    COMPOSE_TWEET_BUTTON.click();
  }

  this.composeTweetInteraction = function(randomString) {
    COMPOSE_TWEET_FIELD.sendKeys(randomString);
    COMPOSE_TWEET_BUTTON.click();
  }

  this.tweetText = function() {
    return TWEET.getText();
  }

  this.openTweetDetail = function() {
    TWEET_DETAIL.click();
  }

  this.deleteTweet = function() {
    TWEET_DROPDOWN_MENU.click();
    DELETE_TWEET.click();
  }

  this.deleteTweetInteraction = function() {
    INTERACTION_DROPDOWN_MENU.click();
    DELETE_TWEET_INTERACTION.click();
  }
};
module.exports = TwitterMainPage;
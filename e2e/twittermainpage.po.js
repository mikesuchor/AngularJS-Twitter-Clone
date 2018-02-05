var TwitterMainPage = function() {
  var composeTweetField = element.all(by.model('composeTweet')).first();
  var composeTweetButton = element.all(by.css('.compose-tweet-btn')).first();
  var tweetDetail = element.all(by.css('.tweets-section')).first();
  var tweetDropdownMenu = element.all(by.css('.dropdown-toggle')).first();
  var deleteTweet = element.all(by.css('[ng-click="$ctrl.deleteTweet($ctrl.tweet.id)"]')).first();
  var interactionDropdownMenu = element.all(by.css('.interaction-dropdown')).first();
  var deleteTweetInteraction = element.all(by.css(
      '[ng-click="$ctrl.deleteTweetInteraction($ctrl.parent, $ctrl.tweet.id)"]')).first();
  var tweetCollection = element.all(by.repeater('tweet in $ctrl.tweets'));
  var interactionCollection = element.all(by.repeater('interaction in $ctrl.tweet.interactions'));
  var tweet = element.all(by.binding('$ctrl.tweet.tweet')).first();
  var navbarHomeLink = element(by.css('[ui-sref=".home"]'));
  var navbarNotificationsLink = element(by.css('[ui-sref=".notifications"]'));
  var navbarMessagesLink = element(by.css('[ui-sref=".messages"]'));
  var notificationsAllLink = element(by.css('[ui-sref="main.notifications"]'));
  var notificationsMentionsLink = element(by.css('[ui-sref="main.mentions"]'));
  var messagesCount = element.all(by.css('.messages-section-list li'));

  this.generateRandomString = function() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  this.loadMainPage = function() {
    browser.get('http://localhost:3000/');
  };

  this.clickNavbarHomeLink = function() {
    navbarHomeLink.click();
  };

  this.clickNavbarNotificationsLink = function() {
    navbarNotificationsLink.click();
  };

  this.clickNavbarMessagesLink = function() {
    navbarMessagesLink.click();
  };

  this.clickNotificationsMentionsLink = function() {
    notificationsMentionsLink.click();
  };

  this.clickNotificationsAllLink = function() {
    notificationsAllLink.click();
  };

  this.tweetCount = function() {
    return tweetCollection.count();
  };

  this.interactionCount = function() {
    return interactionCollection.count();
  };

  this.messagesCount = function() {
    return messagesCount.count();
  };

  this.composeTweet = function(randomString) {
    composeTweetField.sendKeys(randomString);
    composeTweetButton.click();
  };

  this.composeTweetInteraction = function(randomString) {
    composeTweetField.sendKeys(randomString);
    composeTweetButton.click();
  };

  this.tweetText = function() {
    return tweet.getText();
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

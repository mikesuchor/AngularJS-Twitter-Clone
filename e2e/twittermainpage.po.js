var TwitterMainPage = function() {

  const composeTweetField = element.all(by.model('composeTweet')).first();
  const composeTweetButton = element.all(by.css('.compose-tweet-btn')).first();
  const tweetDetail = element.all(by.css('.tweets-section')).first();
  const tweetDropdownMenu = element.all(by.css('.dropdown-toggle')).first();
  const deleteTweet = element.all(by.css('[ng-click="$ctrl.deleteTweet($ctrl.tweet.id)"]')).first();
  const interactionDropdownMenu = element.all(by.css('.interaction-dropdown')).first();
  const deleteTweetInteraction = element.all(by.css('[ng-click="$ctrl.deleteTweetInteraction($ctrl.parent, $ctrl.tweet.id)"]')).first();
  const tweetCollection = element.all(by.repeater('tweet in $ctrl.tweets'));
  const interactionCollection = element.all(by.repeater('interaction in $ctrl.tweet.interactions'));
  const tweet = element.all(by.binding('$ctrl.tweet.tweet')).first();

  this.generateRandomString = function() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  this.loadHomePage = function() {
      browser.get('http://localhost:3000/');
  };

  this.tweetCount = function() {
      return tweetCollection.count();
  }

  this.interactionCount = function() {
      return interactionCollection.count();
  }

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
  }

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
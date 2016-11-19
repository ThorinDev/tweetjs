/*
  ThorinDev
  tweetjs.js
*/

'use strict';

var TweetJSBaseUrl = "https://twitter.com/home/?status=";
var TweetJSMessage;
var TweetJSHeightWindow = 400;
var TweetJSWidthWindow = 400;
var TweetJSBrowserWidth = window.innerWidth/2;

function Tweet(TweetJSMessage) {
  if (TweetJSMessage !== null) {
		var TweetJSWindowOpen = "width="+TweetJSWidthWindow" , height="+TweetJSHeightWindow ", left="+TweetJSBrowserWidth;
    TweetJSMessage = TweetJSMessage.replace(" ", "%20");
    window.open(TweetJSBaseUrl + TweetJSMessage, "", TweetJSWindowOpen);
  }
}

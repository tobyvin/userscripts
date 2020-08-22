// ==UserScript==
// @name        Subreddit No Style
// @namespace   reddit
// @description Automatically disable subreddit styles
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/subreddit_nostyle.user.js
// @match       *://*.reddit.com/r/*
// @grant       none
// ==/UserScript==

function removeStyleCheck() {
    document.getElementById("res-style-checkbox").checked = false;
}

removeStyleCheck();
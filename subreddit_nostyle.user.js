// ==UserScript==
// @name        Subreddit No Style
// @namespace   reddit
// @description Automatically disable subreddit styles
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://raw.githubusercontent.com/tobyvin/userscripts/master/subreddit_nostyle.user.js
// @match       https://*.reddit.com/r/*
// @grant       none
// ==/UserScript==

function removeStyleCheck() {
    checkbox = document.getElementById("res-style-checkbox");
    if (checkbox.checked == true) {
        checkbox.click();
    }
}

removeStyleCheck();